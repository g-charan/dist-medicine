from flask import Flask,jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.inspection import inspect


app = Flask(__name__)


app.config["SQLALCHEMY_DATABASE_URI"]="postgresql://postgres.uknszdupbobfijxfpftt:OLefetXTxPUgvXBy@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"

db=SQLAlchemy(app)



    

class Inventory(db.Model):
    _tablename_ = 'inventory'
    item_id = db.Column(db.Integer, primary_key=True)
    item_name = db.Column(db.String, nullable=False)
    batch_number = db.Column(db.String)
    manufacturer = db.Column(db.String)
    expiry_date = db.Column(db.Date)
    manufactured_date = db.Column(db.Date)
    quantity_in_stock = db.Column(db.Integer)
    category = db.Column(db.String)  
    reorder_level = db.Column(db.Integer)
    reorder_quantity = db.Column(db.Integer)
    status = db.Column(db.String)  
    min_stock_level = db.Column(db.Integer)
    max_stock_level = db.Column(db.Integer)
    storage_location = db.Column(db.String)  
    temperature_requirements = db.Column(db.String)
    certification_patents = db.Column(db.String)

class Testing(db.Model):
    _tablename_ = 'testing'
    test_id = db.Column(db.Integer, primary_key=True)
    item_id = db.Column(db.Integer, db.ForeignKey('inventory.item_id', ondelete='SET NULL'))
    test_date = db.Column(db.Date)
    test_type = db.Column(db.String)
    testing_lab = db.Column(db.String)
    standard_compliance = db.Column(db.String)  
    test_result = db.Column(db.String)  
    test_report = db.Column(db.Text)
    technician_name = db.Column(db.String)
    test_status = db.Column(db.String) 
    remarks = db.Column(db.Text)
    next_test_date = db.Column(db.Date)

class Orders(db.Model):
    _tablename_ = 'orders'
    order_id = db.Column(db.Integer, primary_key=True)
    ordered_item = db.Column(db.String)
    item_id = db.Column(db.Integer, db.ForeignKey('inventory.item_id', ondelete='SET NULL'))
    vendors_available = db.Column(db.String)
    order_date = db.Column(db.Date)
    delivery_date = db.Column(db.Date)
    quantity = db.Column(db.Integer)
    price = db.Column(db.Numeric)  
    total_price = db.Column(db.Numeric)
    shipping_address = db.Column(db.String)
    payment_status = db.Column(db.String)
    order_status = db.Column(db.String)
    contact_person = db.Column(db.String)
    contact_number = db.Column(db.String)
    remarks = db.Column(db.Text)

with app.app_context():
    db.create_all()
    


@app.route("/")
def inventory():
     return f"Hello world"
 
@app.route("/api/inventory")
def get_inventory():
    
    items = Inventory.query.all()
    
    
    columns = [column.name for column in inspect(Inventory).c]
    
    
    inventory_list = [
        {col: getattr(item, col) for col in columns}
        for item in items
    ]
    
    
    return jsonify(inventory_list)


if __name__ == '__main__':
    app.run(debug=True)
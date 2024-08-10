import React,{useState} from 'react'
import axios from 'axios'
function AddProduct() {
    const [productName, setProductName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');

    const handleAddProduct = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token'); // Assuming you're storing the token in localStorage
            const response = await axios.post('http://localhost:5000/api/products/add', 
            { name: productName, category, price },
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            alert('Product added successfully!');
            setProductName('');
            setCategory('');
            setPrice('');
        } catch (error) {
            console.error(error);
            alert('Error adding product');
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Farmer Dashboard</h1>
            <h2>Add New Product</h2>
            <form onSubmit={handleAddProduct} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', margin: 'auto' }}>
                <input 
                    type="text" 
                    value={productName} 
                    onChange={(e) => setProductName(e.target.value)} 
                    placeholder="Product Name" 
                    required 
                    style={{ marginBottom: '10px', padding: '8px' }}
                />
                <input 
                    type="text" 
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)} 
                    placeholder="Category" 
                    required 
                    style={{ marginBottom: '10px', padding: '8px' }}
                />
                <input 
                    type="number" 
                    value={price} 
                    onChange={(e) => setPrice(e.target.value)} 
                    placeholder="Price" 
                    required 
                    style={{ marginBottom: '10px', padding: '8px' }}
                />
                <button type="submit" style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>Add Product</button>
            </form>
        </div>
    );
}

export default AddProduct

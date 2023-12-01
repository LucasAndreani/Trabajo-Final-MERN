const express = require('express')
const multer = require('multer');
const { createProduct, getProducts, deleteProduct, getProductById, updateProduct } = require('../dao/controllers/productController');
const productRouter = express.Router()

const upload = multer({ dest: 'uploads/' });

productRouter.get('/', async (req, res) => {
  res.json({ok: true, products: await getProducts()})
})

productRouter.post('/', upload.single('thumbnail'), async (req, res) => {
  try {
    console.log('Received file:', req.file);
    const thumbnailPath = req.file.path;
    const { nombre, precio, stock, descripcion, type } = req.body;

    
    await createProduct({
      nombre,
      precio,
      stock,
      descripcion,
      thumbnail: thumbnailPath, 
      type,
    });
    res.status(200).json({ ok: true, products: await getProducts() });
  } catch (error) {
    console.error('Error during product creation:', error);
    res.status(500).json({ ok: false, error: 'Internal Server Error' });
  }
});
 
productRouter.delete('/:pid', async (req, res) => {
  const {pid} = req.params
  let result = await deleteProduct(pid)
  if(result.ok){
    return res.status(200).json(
      {
      ok: true,
      products: await getProducts(),
      deleteProduct: result.deletedProduct
    }
  )
  }
  else{
    return res.status(404).json({ok: false, error: result.error})
  }
})

productRouter.get('/:pid', async (req,res) => {
  const {pid} = req.params
  let product = await getProductById(pid)
  if(product){
    res.status(200).json({ok: true, product})
  }
  else{
    res.status(404).json({ok: false, error: 'product not found'})
  }
})

productRouter.put('/:pid', async (req, res) => {
  const { pid } = req.params;
  const updatedData = req.body;

  const result = await updateProduct(pid, updatedData);

  if (result.ok) {
    res.status(200).json({ ok: true, content: 'Producto actualizado con éxito', updatedProduct: result.updatedProduct });
  } else {
    res.status(404).json({ ok: false, error: result.error });
  }
});

module.exports = productRouter
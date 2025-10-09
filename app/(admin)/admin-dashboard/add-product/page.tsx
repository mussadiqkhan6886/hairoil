'use client'

import { useState } from 'react'
import axios from 'axios'

export default function AddProductPage() {
  const [product, setProduct] = useState({
    name: '',
    slug: '',
    description: '',
    price: '',
    discountPrice: '0',
    category: '',
    size: '',
    mainImage: '',
    isSale: false,
    inStock: true,
    isNewArrival: true,
    images: [] as string[],
    ingredients: [''],
    benefits: [''],
  })

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, type, value, checked } = e.target as HTMLInputElement
    setProduct((prev) => {
      const updated = { ...prev, [name]: type === 'checkbox' ? checked : value }
      // if discount unchecked → reset discountPrice to 0
      if (name === 'isSale' && !checked) updated.discountPrice = '0'
      return updated
    })
  }

  const handleArrayChange = (e: React.ChangeEvent<HTMLInputElement>, index: number, key: string) => {
    const { value } = e.target
    setProduct(prev => {
      const updated = [...(prev as any)[key]]
      updated[index] = value
      return { ...prev, [key]: updated }
    })
  }

  const addField = (key: string) => {
    setProduct(prev => ({ ...prev, [key]: [...(prev as any)[key], ''] }))
  }

  const removeField = (key: string, index: number) => {
    setProduct(prev => {
      const updated = [...(prev as any)[key]]
      updated.splice(index, 1)
      return { ...prev, [key]: updated }
    })
  }

  const handleFakeUpload = (key: 'mainImage' | 'images') => {
    // Simulate fake upload UI (placeholder for Cloudinary)
    const fakeUrl = 'https://placehold.co/200x200?text=Uploaded+Image'
    setProduct(prev => {
      if (key === 'mainImage') return { ...prev, mainImage: fakeUrl }
      return { ...prev, images: [...prev.images, fakeUrl] }
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const res = await axios.post('/api/products', product)
      if (res.status === 201) {
        setMessage('✅ Product added successfully!')
        setProduct({
          name: '',
          slug: '',
          description: '',
          price: '',
          discountPrice: '0',
          category: '',
          size: '',
          mainImage: '',
          isSale: false,
          inStock: true,
          isNewArrival: true,
          images: [],
          ingredients: [''],
          benefits: [''],
        })
      }
    } catch (error) {
      console.error(error)
      setMessage('❌ Failed to add product.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="max-w-3xl mx-auto py-10 px-5">
      <h1 className="text-3xl font-semibold mb-6">Add Product</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Basic Inputs */}
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input name="name" value={product.name} onChange={handleChange} required className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block mb-1 font-medium">Slug</label>
          <input name="slug" value={product.slug} onChange={handleChange} required placeholder="example-hair-oil" className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea name="description" value={product.description} onChange={handleChange} required className="w-full border p-2 rounded" />
        </div>

        {/* Price + Discount */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Price</label>
            <input type="number" name="price" value={product.price} onChange={handleChange} required className="w-full border p-2 rounded" />
          </div>

          {product.isSale && (
            <div>
              <label className="block mb-1 font-medium">Discount Price</label>
              <input
                type="number"
                name="discountPrice"
                value={product.discountPrice}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>
          )}
        </div>

        {/* Category + Size */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Category</label>
            <input name="category" value={product.category} onChange={handleChange} required className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Size</label>
            <input name="size" value={product.size} onChange={handleChange} required className="w-full border p-2 rounded" />
          </div>
        </div>

        {/* Upload UI - Main Image */}
        <div>
          <label className="block mb-1 font-medium">Main Image</label>
          <button
            type="button"
            onClick={() => handleFakeUpload('mainImage')}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Upload Main Image
          </button>
          {product.mainImage && (
            <img src={product.mainImage} alt="Main" className="mt-3 w-32 h-32 object-cover rounded" />
          )}
        </div>

        {/* Upload UI - Gallery Images */}
        <div>
          <label className="block mb-1 font-medium">Gallery Images</label>
          <button
            type="button"
            onClick={() => handleFakeUpload('images')}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Upload Gallery Images
          </button>
          <div className="flex flex-wrap gap-3 mt-3">
            {product.images.map((img, i) => (
              <div key={i} className="relative">
                <img src={img} alt={`img-${i}`} className="w-24 h-24 object-cover rounded" />
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Arrays */}
        {['ingredients', 'benefits'].map((key) => (
          <div key={key}>
            <label className="block mb-2 font-medium capitalize">{key}</label>
            {(product as any)[key].map((item: string, index: number) => (
              <div key={index} className="flex items-center gap-2 mb-2">
                <input
                  value={item}
                  onChange={(e) => handleArrayChange(e, index, key)}
                  placeholder={`Enter ${key.slice(0, -1)}`}
                  className="w-full border p-2 rounded"
                />
                {index > 0 && (
                  <button type="button" onClick={() => removeField(key, index)} className="text-red-500 font-bold">
                    ✕
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => addField(key)}
              className="bg-gray-200 px-3 py-1 rounded"
            >
              + Add {key.slice(0, -1)}
            </button>
          </div>
        ))}

        {/* Toggles */}
        <div className="flex flex-wrap gap-4 mt-4">
          <label className="flex items-center gap-2">
            <input type="checkbox" name="isSale" checked={product.isSale} onChange={handleChange} />
            On Sale
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" name="inStock" checked={product.inStock} onChange={handleChange} />
            In Stock
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" name="isNewArrival" checked={product.isNewArrival} onChange={handleChange} />
            New Arrival
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          {loading ? 'Saving...' : 'Add Product'}
        </button>

        {message && <p className="mt-3 font-medium">{message}</p>}
      </form>
    </main>
  )
}

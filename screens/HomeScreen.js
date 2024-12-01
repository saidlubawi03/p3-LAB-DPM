import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import ProductCard from '../components/ProductCard';

const products = [
  { 
    id: 1, 
    name: 'Sepatu', 
    imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpyBDNjsMFADUOtPhStgqcLZ3SPgVHH8TJYQ&s', 
    category: 'fashion', 
    price: 'Rp 350.000' // Menambahkan harga
  },
  { 
    id: 2, 
    name: 'Kaos', 
    imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWhZ1M70aOOQwJT0a_4nIUNaPanR-5nKkJkw&s', 
    category: 'fashion', 
    price: 'Rp 100.000' 
  },
  { 
    id: 3, 
    name: 'Laptop', 
    imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhg04orZ_O5vICf1ncsj7MDhqPAlcTDxtSRw&s', 
    category: 'electronics', 
    price: 'Rp 8.000.000' 
  },
  { 
    id: 4, 
    name: 'Mobil', 
    imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbqkCPWwAxD8xrPP8iMOLDwBQabEUcupzRAQ&s', 
    category: 'kendaraan', 
    price: 'Rp 200.000.000' 
  },
  { 
    id: 5, 
    name: 'Motor', 
    imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvf-NEY3S6TLby89lG2CrgDvRcVxZtjGow5A&s', 
    category: 'kendaraan', 
    price: 'Rp 15.000.000' 
  },
  { 
    id: 6, 
    name: 'Pizza', 
    imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaMiUXN8QmxT43svqmdBUzR1TRnz7VLoyVpQ&s', 
    category: 'makanan', 
    price: 'Rp 80.000' 
  },
  { 
    id: 7, 
    name: 'Burger', 
    imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3PHTNghpiZhL-8P6jQo2nS0tXLOKrQ2CEXw&s', 
    category: 'makanan', 
    price: 'Rp 50.000' 
  },
];

const HomeScreen = () => {
  const [category, setCategory] = useState('ALL');

  const filteredProducts = category === 'ALL'
    ? products
    : products.filter(product => product.category.toLowerCase() === category.toLowerCase());

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Shopping App</Text>
      <View style={styles.nav}>
        {['ALL', 'FASHION', 'ELECTRONICS', 'KENDARAAN', 'MAKANAN'].map(cat => (
          <TouchableOpacity 
            key={cat} 
            style={[styles.button, category === cat && styles.activeButton]}
            onPress={() => setCategory(cat)}
          >
            <Text style={[styles.buttonText, category === cat && styles.activeButtonText]}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView contentContainerStyle={styles.productList}>
        {filteredProducts.map(product => (
          <ProductCard 
            key={product.id} 
            name={product.name} 
            imageUri={product.imageUri} 
            price={product.price} // Menambahkan harga ke props
          />
        ))}
      </ScrollView>
      <Text style={styles.footer}>© 2024 Shopping App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7',
  },
  header: {
    fontSize: 32,
    textAlign: 'center',
    marginVertical: 10,
    color: '#3b5998',
    fontWeight: 'bold',
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#3b5998',
    borderRadius: 25,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  activeButton: {
    backgroundColor: '#1e3c72',
  },
  activeButtonText: {
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'normal',
  },
  productList: {
    paddingHorizontal: 10,
  },
  footer: {
    textAlign: 'center',
    marginVertical: 10,
    color: '#3b5998',
  },
});

export default HomeScreen;

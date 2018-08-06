package com.test.store.model;

import java.math.BigDecimal;

public class Item {

    private Long idItem;
    private String descCategory;
    private Integer precio;
    private int cantidad;

    public Item() {
    }

    public Item(String descCategory, Integer precio) {
        this.descCategory = descCategory;
        this.precio = precio;
    }

    public Long getIdItem() {
        return idItem;
    }

    public void setIdItem(Long idItem) {
        this.idItem = idItem;
    }

    public String getDescCategory() {
        return descCategory;
    }

    public void setDescCategory(String descCategory) {
        this.descCategory = descCategory;
    }

    public Integer getPrecio() {
        return precio;
    }

    public void setPrecio(Integer precio) {
        this.precio = precio;
    }
  
    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

}

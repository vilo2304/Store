package com.test.store.model;

public class Category implements java.io.Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Integer idCategoria;
	private String descripcion;
	
	public Category() {
	}

	
	public Integer getIdcategoria() {
		return this.idCategoria;
	}

	public void setIdcategoria(Integer idCategoria) {
		this.idCategoria = idCategoria;
	}

	public String getDescripcion() {
		return this.descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
}
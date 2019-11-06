package com.uniovi.XMLReader.model;

import javax.xml.bind.annotation.XmlElement;

public class Hito {
	private String sitio;
	private String descripcion;
	private Coordenada coordenada;
	private Distancia distancia;
	private String galeria;

	public String getSitio() {
		return sitio;
	}

	@XmlElement
	public void setSitio(String sitio) {
		this.sitio = sitio;
	}

	public String getDescripcion() {
		return descripcion;
	}

	@XmlElement
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public Coordenada getCoordenada() {
		return coordenada;
	}

	@XmlElement
	public void setCoordenada(Coordenada coordenada) {
		this.coordenada = coordenada;
	}

	public Distancia getDistancia() {
		return distancia;
	}

	@XmlElement
	public void setDistancia(Distancia distancia) {
		this.distancia = distancia;
	}

	public String getGaleria() {
		return galeria;
	}

	@XmlElement
	public void setGaleria(String galeria) {
		this.galeria = galeria;
	}

}

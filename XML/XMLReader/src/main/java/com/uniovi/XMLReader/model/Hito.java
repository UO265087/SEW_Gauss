package com.uniovi.XMLReader.model;

import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;

public class Hito {
	private String sitio;
	private String descripcion;
	private Coordenada coordenada;
	private double distancia;
	private String unidades;
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

	public double getDistancia() {
		return distancia;
	}

	@XmlElement
	public void setDistancia(double distancia) {
		this.distancia = distancia;
	}

	public String getUnidades() {
		return unidades;
	}

	@XmlAttribute
	public void setUnidades(String unidades) {
		this.unidades = unidades;
	}

	public String getGaleria() {
		return galeria;
	}

	@XmlElement
	public void setGaleria(String galeria) {
		this.galeria = galeria;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result
				+ ((coordenada == null) ? 0 : coordenada.hashCode());
		result = prime * result
				+ ((descripcion == null) ? 0 : descripcion.hashCode());
		long temp;
		temp = Double.doubleToLongBits(distancia);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		result = prime * result + ((galeria == null) ? 0 : galeria.hashCode());
		result = prime * result + ((sitio == null) ? 0 : sitio.hashCode());
		result = prime * result
				+ ((unidades == null) ? 0 : unidades.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Hito other = (Hito) obj;
		if (coordenada == null) {
			if (other.coordenada != null)
				return false;
		} else if (!coordenada.equals(other.coordenada))
			return false;
		if (descripcion == null) {
			if (other.descripcion != null)
				return false;
		} else if (!descripcion.equals(other.descripcion))
			return false;
		if (Double.doubleToLongBits(distancia) != Double
				.doubleToLongBits(other.distancia))
			return false;
		if (galeria == null) {
			if (other.galeria != null)
				return false;
		} else if (!galeria.equals(other.galeria))
			return false;
		if (sitio == null) {
			if (other.sitio != null)
				return false;
		} else if (!sitio.equals(other.sitio))
			return false;
		if (unidades == null) {
			if (other.unidades != null)
				return false;
		} else if (!unidades.equals(other.unidades))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Hito [sitio=" + sitio + ", descripcion=" + descripcion
				+ ", coordenada=" + coordenada + ", distancia=" + distancia
				+ ", unidades=" + unidades + ", galeria=" + galeria + "]";
	}

}

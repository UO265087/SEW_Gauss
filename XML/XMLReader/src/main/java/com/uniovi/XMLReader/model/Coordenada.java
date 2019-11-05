package com.uniovi.XMLReader.model;

import javax.xml.bind.annotation.XmlElement;

public class Coordenada {

	private double altitud;
	private double longitud;
	private double latitud;

	public double getAltitud() {
		return altitud;
	}

	@XmlElement
	public void setAltitud(double altitud) {
		this.altitud = altitud;
	}

	public double getLongitud() {
		return longitud;
	}

	@XmlElement
	public void setLongitud(double longitud) {
		this.longitud = longitud;
	}

	public double getLatitud() {
		return latitud;
	}

	@XmlElement
	public void setLatitud(double latitud) {
		this.latitud = latitud;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		long temp;
		temp = Double.doubleToLongBits(altitud);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		temp = Double.doubleToLongBits(latitud);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		temp = Double.doubleToLongBits(longitud);
		result = prime * result + (int) (temp ^ (temp >>> 32));
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
		Coordenada other = (Coordenada) obj;
		if (Double.doubleToLongBits(altitud) != Double
				.doubleToLongBits(other.altitud))
			return false;
		if (Double.doubleToLongBits(latitud) != Double
				.doubleToLongBits(other.latitud))
			return false;
		if (Double.doubleToLongBits(longitud) != Double
				.doubleToLongBits(other.longitud))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Coordenada [altitud=" + altitud + ", longitud=" + longitud
				+ ", latitud=" + latitud + "]";
	}

}

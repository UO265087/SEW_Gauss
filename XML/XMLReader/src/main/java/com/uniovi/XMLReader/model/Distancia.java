package com.uniovi.XMLReader.model;

import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlValue;

public class Distancia {

	private double value;

	private String unidades;

	public double getValue() {
		return value;
	}

	@XmlValue
	public void setValue(double value) {
		this.value = value;
	}

	public String getUnidades() {
		return unidades;
	}

	@XmlAttribute
	public void setUnidades(String unidades) {
		this.unidades = unidades;
	}

}

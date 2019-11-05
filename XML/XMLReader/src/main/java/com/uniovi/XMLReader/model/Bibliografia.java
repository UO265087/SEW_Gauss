package com.uniovi.XMLReader.model;

import java.util.ArrayList;
import java.util.List;

import javax.xml.bind.annotation.XmlElement;

public class Bibliografia {

	private List<String> referencias = new ArrayList<>();

	public List<String> getReferencias() {
		return referencias;
	}

	@XmlElement(name = "referencia")
	public void setReferencias(List<String> referencias) {
		this.referencias = referencias;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result
				+ ((referencias == null) ? 0 : referencias.hashCode());
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
		Bibliografia other = (Bibliografia) obj;
		if (referencias == null) {
			if (other.referencias != null)
				return false;
		} else if (!referencias.equals(other.referencias))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Bibliografia [referencias=" + referencias + "]";
	}

}

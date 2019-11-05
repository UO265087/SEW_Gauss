package com.uniovi.XMLReader.model;

import java.util.ArrayList;
import java.util.List;

import javax.xml.bind.annotation.XmlElement;

public class Hitos {
	private List<Hito> hitos = new ArrayList<>();

	public List<Hito> getHitos() {
		return hitos;
	}

	@XmlElement(name = "hito")
	public void setHitos(List<Hito> hitos) {
		this.hitos = hitos;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((hitos == null) ? 0 : hitos.hashCode());
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
		Hitos other = (Hitos) obj;
		if (hitos == null) {
			if (other.hitos != null)
				return false;
		} else if (!hitos.equals(other.hitos))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Hitos [hitos=" + hitos + "]";
	}

}

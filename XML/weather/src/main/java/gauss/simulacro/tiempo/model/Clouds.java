package gauss.simulacro.tiempo.model;

import javax.xml.bind.annotation.XmlAttribute;

public class Clouds {
	private double value;
	private String name;

	public double getValue() {
		return value;
	}

	@XmlAttribute
	public void setValue(double value) {
		this.value = value;
	}

	public String getName() {
		return name;
	}

	@XmlAttribute
	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "\n\tClouds [value=" + value + ", name=" + name + "]";
	}

}

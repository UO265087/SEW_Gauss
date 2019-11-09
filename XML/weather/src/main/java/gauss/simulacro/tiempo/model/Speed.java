package gauss.simulacro.tiempo.model;

import javax.xml.bind.annotation.XmlAttribute;

public class Speed {
	private double value;
	private String unit;
	private String name;

	public double getValue() {
		return value;
	}

	@XmlAttribute
	public void setValue(double value) {
		this.value = value;
	}

	public String getUnit() {
		return unit;
	}

	@XmlAttribute
	public void setUnit(String unit) {
		this.unit = unit;
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
		return "\n\tSpeed [value=" + value + ", unit=" + unit + ", name=" + name
				+ "]";
	}

}

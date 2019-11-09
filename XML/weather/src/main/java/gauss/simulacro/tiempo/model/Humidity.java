package gauss.simulacro.tiempo.model;

import javax.xml.bind.annotation.XmlAttribute;

public class Humidity {
	private double value;
	private String unit;

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

	@Override
	public String toString() {
		return "\n\tHumidity [value=" + value + ", unit=" + unit + "]";
	}

}

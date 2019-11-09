package gauss.simulacro.tiempo.model;

import javax.xml.bind.annotation.XmlAttribute;

public class Temperature {
	private double value;
	private double min;
	private double max;
	private String unit;

	public double getValue() {
		return value;
	}

	@XmlAttribute
	public void setValue(double value) {
		this.value = value;
	}

	public double getMin() {
		return min;
	}

	@XmlAttribute
	public void setMin(double min) {
		this.min = min;
	}

	public double getMax() {
		return max;
	}

	@XmlAttribute
	public void setMax(double max) {
		this.max = max;
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
		return "\n\tTemperature [value=" + value + ", min=" + min + ", max=" + max
				+ ", unit=" + unit + "]";
	}

}

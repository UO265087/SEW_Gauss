package gauss.simulacro.tiempo.model;

import javax.xml.bind.annotation.XmlAttribute;

public class Visibility {
	private double value;

	public double getValue() {
		return value;
	}

	@XmlAttribute
	public void setValue(double value) {
		this.value = value;
	}

	@Override
	public String toString() {
		return "\n\tVisibility [value=" + value + "]";
	}

}

package gauss.simulacro.tiempo.model;

import javax.xml.bind.annotation.XmlAttribute;

public class Weather {
	private double number;
	private String value;
	private String icon;

	public double getNumber() {
		return number;
	}

	@XmlAttribute
	public void setNumber(double number) {
		this.number = number;
	}

	public String getValue() {
		return value;
	}

	@XmlAttribute
	public void setValue(String value) {
		this.value = value;
	}

	public String getIcon() {
		return icon;
	}

	@XmlAttribute
	public void setIcon(String icon) {
		this.icon = icon;
	}

	@Override
	public String toString() {
		return "\n\tWeather [number=" + number + ", value=" + value + ", icon="
				+ icon + "]";
	}

}

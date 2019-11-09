package gauss.simulacro.tiempo.model;

import javax.xml.bind.annotation.XmlAttribute;

public class Precipitation {
	private String mode;

	public String getMode() {
		return mode;
	}

	@XmlAttribute
	public void setMode(String mode) {
		this.mode = mode;
	}

	@Override
	public String toString() {
		return "\n\tPrecipitation [mode=" + mode + "]";
	}

}

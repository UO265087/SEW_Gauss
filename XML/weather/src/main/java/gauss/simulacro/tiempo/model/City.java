package gauss.simulacro.tiempo.model;

import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;

public class City {
	private Long id;
	private String name;
	private Coord coord;
	private String country;
	private String timezone;
	private Sun sun;

	public Long getId() {
		return id;
	}

	@XmlAttribute
	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	@XmlAttribute
	public void setName(String name) {
		this.name = name;
	}

	public Coord getCoord() {
		return coord;
	}

	@XmlElement
	public void setCoord(Coord coord) {
		this.coord = coord;
	}

	public String getCountry() {
		return country;
	}

	@XmlElement
	public void setCountry(String country) {
		this.country = country;
	}

	public String getTimezone() {
		return timezone;
	}

	@XmlElement
	public void setTimezone(String timezone) {
		this.timezone = timezone;
	}

	public Sun getSun() {
		return sun;
	}

	@XmlElement
	public void setSun(Sun sun) {
		this.sun = sun;
	}

	@Override
	public String toString() {
		return "\n\tCity [id=" + id + ", name=" + name + ", coord=" + coord
				+ ", country=" + country + ", timezone=" + timezone + ", sun="
				+ sun + "]";
	}

	
	
}

package gauss.simulacro.tiempo.model;

import java.time.LocalTime;

import javax.xml.bind.annotation.XmlAttribute;

import org.joda.time.LocalDate;
import org.joda.time.LocalDateTime;
import org.joda.time.format.DateTimeFormat;

public class Sun {
	private LocalDateTime rise;
	private LocalDateTime set;

	public String getRise() {
		return rise.toString("dd-MM-yyyy HH:mm");
	}

	@XmlAttribute
	public void setRise(String rise) {
		this.rise = convertDate(rise);
	}

	public String getSet() {
		return set.toString("dd-MM-yyyy HH:mm");
	}

	@XmlAttribute
	public void setSet(String set) {
		this.set = convertDate(set);
	}

	@Override
	public String toString() {
		return "Sun [rise=" + rise + ", set=" + set + "]";
	}

	private LocalDateTime convertDate(String date) {
		String[] data = date.split("T");
		LocalDate day = LocalDate.parse(data[0],
				DateTimeFormat.forPattern("yyyy-MM-dd"));
		LocalTime time = LocalTime.parse(data[1]);
		return new LocalDateTime(day.getYear(), day.getMonthOfYear(),
				day.getDayOfMonth(), time.getHour(), time.getMinute());
	}

}

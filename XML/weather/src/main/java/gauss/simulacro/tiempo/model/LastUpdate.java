package gauss.simulacro.tiempo.model;

import java.time.LocalTime;

import javax.xml.bind.annotation.XmlAttribute;

import org.joda.time.LocalDate;
import org.joda.time.LocalDateTime;
import org.joda.time.format.DateTimeFormat;

public class LastUpdate {
	private LocalDateTime value;

	public String getValue() {
		return value.toString();
	}

	@XmlAttribute
	public void setValue(String value) {
		this.value = convertDate(value);
	}

	private LocalDateTime convertDate(String date) {
		String[] data = date.split("T");
		LocalDate day = LocalDate.parse(data[0],
				DateTimeFormat.forPattern("yyyy-MM-dd"));
		LocalTime time = LocalTime.parse(data[1]);
		return new LocalDateTime(day.getYear(), day.getMonthOfYear(),
				day.getDayOfMonth(), time.getHour(), time.getMinute());
	}

	@Override
	public String toString() {
		return "\n\tLastUpdate [value=" + value + "]";
	}
	
	
}

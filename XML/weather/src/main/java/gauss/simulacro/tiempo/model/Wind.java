package gauss.simulacro.tiempo.model;

import com.sun.xml.internal.txw2.annotation.XmlElement;

public class Wind {
	private Speed speed;
	private Direction direction;

	public Speed getSpeed() {
		return speed;
	}

	@XmlElement
	public void setSpeed(Speed speed) {
		this.speed = speed;
	}

	public Direction getDirection() {
		return direction;
	}

	@XmlElement
	public void setDirection(Direction direction) {
		this.direction = direction;
	}

	@Override
	public String toString() {
		return "\n\tWind [speed=" + speed + ", direction=" + direction + "]";
	}
}

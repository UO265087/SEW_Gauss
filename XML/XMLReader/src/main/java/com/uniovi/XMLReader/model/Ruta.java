package com.uniovi.XMLReader.model;

import javax.xml.bind.annotation.XmlElement;

import org.joda.time.LocalTime;

public class Ruta {
	private String nombre;
	private String tipo;
	private String transporte;
	private String fecha;
	private LocalTime hora;
	private String duracion;
	private String descripcion;
	private String personasAdecuadas;
	private String lugarInicio;
	private String calleInicio;
	private Coordenada coordenada;
	private Bibliografia bibliografia;
	private String recomendacion;
	private Hitos hitos;

	public String getNombre() {
		return nombre;
	}

	@XmlElement
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getTipo() {
		return tipo;
	}

	@XmlElement
	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public String getTransporte() {
		return transporte;
	}

	@XmlElement
	public void setTransporte(String transporte) {
		this.transporte = transporte;
	}

	public String getFecha() {
		return fecha;
	}

	@XmlElement
	public void setFecha(String fecha) {
		this.fecha = fecha;
	}

	public LocalTime getHora() {
		return hora;
	}

	@XmlElement
	public void setHora(LocalTime hora) {
		this.hora = hora;
	}

	public String getDuracion() {
		return duracion;
	}

	@XmlElement
	public void setDuracion(String duracion) {
		this.duracion = duracion;
	}

	public String getDescripcion() {
		return descripcion;
	}

	@XmlElement
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public String getPersonasAdecuadas() {
		return personasAdecuadas;
	}

	@XmlElement
	public void setPersonasAdecuadas(String personasAdecuadas) {
		this.personasAdecuadas = personasAdecuadas;
	}

	public String getLugarInicio() {
		return lugarInicio;
	}

	@XmlElement
	public void setLugarInicio(String lugarInicio) {
		this.lugarInicio = lugarInicio;
	}

	public String getCalleInicio() {
		return calleInicio;
	}

	@XmlElement
	public void setCalleInicio(String calleInicio) {
		this.calleInicio = calleInicio;
	}

	public Coordenada getCoordenada() {
		return coordenada;
	}

	@XmlElement
	public void setCoordenada(Coordenada coordenada) {
		this.coordenada = coordenada;
	}

	public Bibliografia getBibliografia() {
		return bibliografia;
	}

	@XmlElement
	public void setBibliografia(Bibliografia bibliografia) {
		this.bibliografia = bibliografia;
	}

	public String getRecomendacion() {
		return recomendacion;
	}

	@XmlElement
	public void setRecomendacion(String recomendacion) {
		this.recomendacion = recomendacion;
	}

	public Hitos getHitos() {
		return hitos;
	}

	@XmlElement
	public void setHitos(Hitos hitos) {
		this.hitos = hitos;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result
				+ ((bibliografia == null) ? 0 : bibliografia.hashCode());
		result = prime * result
				+ ((calleInicio == null) ? 0 : calleInicio.hashCode());
		result = prime * result
				+ ((descripcion == null) ? 0 : descripcion.hashCode());
		result = prime * result
				+ ((duracion == null) ? 0 : duracion.hashCode());
		result = prime * result + ((fecha == null) ? 0 : fecha.hashCode());
		result = prime * result + ((hora == null) ? 0 : hora.hashCode());
		result = prime * result
				+ ((lugarInicio == null) ? 0 : lugarInicio.hashCode());
		result = prime * result + ((nombre == null) ? 0 : nombre.hashCode());
		result = prime * result + ((personasAdecuadas == null) ? 0
				: personasAdecuadas.hashCode());
		result = prime * result
				+ ((recomendacion == null) ? 0 : recomendacion.hashCode());
		result = prime * result + ((tipo == null) ? 0 : tipo.hashCode());
		result = prime * result
				+ ((transporte == null) ? 0 : transporte.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Ruta other = (Ruta) obj;
		if (bibliografia == null) {
			if (other.bibliografia != null)
				return false;
		} else if (!bibliografia.equals(other.bibliografia))
			return false;
		if (calleInicio == null) {
			if (other.calleInicio != null)
				return false;
		} else if (!calleInicio.equals(other.calleInicio))
			return false;
		if (descripcion == null) {
			if (other.descripcion != null)
				return false;
		} else if (!descripcion.equals(other.descripcion))
			return false;
		if (duracion == null) {
			if (other.duracion != null)
				return false;
		} else if (!duracion.equals(other.duracion))
			return false;
		if (fecha == null) {
			if (other.fecha != null)
				return false;
		} else if (!fecha.equals(other.fecha))
			return false;
		if (hora == null) {
			if (other.hora != null)
				return false;
		} else if (!hora.equals(other.hora))
			return false;
		if (lugarInicio == null) {
			if (other.lugarInicio != null)
				return false;
		} else if (!lugarInicio.equals(other.lugarInicio))
			return false;
		if (nombre == null) {
			if (other.nombre != null)
				return false;
		} else if (!nombre.equals(other.nombre))
			return false;
		if (personasAdecuadas == null) {
			if (other.personasAdecuadas != null)
				return false;
		} else if (!personasAdecuadas.equals(other.personasAdecuadas))
			return false;
		if (recomendacion == null) {
			if (other.recomendacion != null)
				return false;
		} else if (!recomendacion.equals(other.recomendacion))
			return false;
		if (tipo == null) {
			if (other.tipo != null)
				return false;
		} else if (!tipo.equals(other.tipo))
			return false;
		if (transporte == null) {
			if (other.transporte != null)
				return false;
		} else if (!transporte.equals(other.transporte))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Ruta [nombre=" + nombre + ", tipo=" + tipo + ", transporte="
				+ transporte + ", fecha=" + fecha + ", hora=" + hora
				+ ", duracion=" + duracion + ", descripcion=" + descripcion
				+ ", personasAdecuadas=" + personasAdecuadas + ", lugarInicio="
				+ lugarInicio + ", calleInicio=" + calleInicio + ", coordenada="
				+ coordenada + ", bibliografia=" + bibliografia
				+ ", recomendacion=" + recomendacion + ", hitos=" + hitos + "]";
	}

}

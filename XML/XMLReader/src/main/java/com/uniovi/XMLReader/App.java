package com.uniovi.XMLReader;

import java.io.File;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Marshaller;
import javax.xml.bind.Unmarshaller;

import com.uniovi.XMLReader.model.Rutas;

public class App {
	public static void main(String[] args) {
		try {
			Rutas rutas = loadXml();
			System.out.println(rutas);
			createXml(rutas);
		} catch (JAXBException e) {
			e.printStackTrace();
		}
	}

	private static Rutas loadXml() throws JAXBException {
		File file = new File("files/rutas.xml");
		JAXBContext jaxbContext = JAXBContext.newInstance(Rutas.class);
		Unmarshaller jaxbUnmarshaller = jaxbContext.createUnmarshaller();
		return (Rutas) jaxbUnmarshaller.unmarshal(file);
	}

	private static void createXml(Rutas rutas) throws JAXBException {
		File file = new File("files/rutasGeneradas.xml");
		JAXBContext jaxbContext = JAXBContext.newInstance(Rutas.class);
		Marshaller jaxbMarshaller = jaxbContext.createMarshaller();
		jaxbMarshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true);
		jaxbMarshaller.marshal(rutas, file);
	}
}

package gauss.simulacro.tiempo;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.ProtocolException;
import java.net.URL;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;

import gauss.simulacro.tiempo.model.Current;

/*
 * Realiza la siguientes modificaciones:
 *  1. Permitir que seleccione una ciudad cualquiera
 *  2. Permitir que pida los datos en los siguientes formatos: xml, json o html
 *     (Se escribirian en minusculas)
 *  3. Permitir seleccionar distintos tipos de unidades: 
 *     	Para temperatura en Fahrenheit usar imperial
 *     	Para temperatura en Celsius usar metric
 *     	Para temperatura en Kelvin el la poción por defecto, en este caso no
 *      indiqueis parámetro
 *  4. Permitir seleccionar distintos lenguajes, las opciones permitidas son:
 *     	Arabic - ar, Bulgarian - bg, Catalan - ca, Czech - cz, German - de, 
 *     	Greek - el, English - en, Persian (Farsi) - fa, Finnish - fi, 
 *     	French - fr, Galician - gl, Croatian - hr, Hungarian - hu, Italian - it, 
 *     	Japanese - ja, Korean - kr, Latvian - la, Lithuanian - lt, 
 *     	Macedonian - mk, Dutch - nl, Polish - pl, 
 *     	Portuguese - pt, Romanian - ro, Russian - ru, Swedish - se, 
 *     	Slovak - sk, Slovenian - sl, Spanish - es, Turkish - tr, Ukrainian - ua,
 *     	Vietnamese - vi, Chinese Simplified - zh_cn, 
 *     	Chinese Traditional - zh_tw.
 *  5. Menos la opción de la ciudad, el resto se puede hacer combinatoria con
 *   ellas como se quiera
 */
public class App {

	private static String FILE = "files/data.xml";

	public static void main(String[] args) throws IOException, JAXBException {
//		BufferedReader input = new BufferedReader(
//				new InputStreamReader(System.in));
		URL url = configUrl();
		String content = loadData(url);
		saveData(content);
		Current data = loadXml();
		System.out.println(data);
	}

	private static URL configUrl() throws IOException {
		String direction = "https://api.openweathermap.org/data/2.5/weather?";
		direction += "q=Oviedo";
		direction += "&mode=xml";
		direction += "&units=metric";
		direction += "&lang=es";
		direction += "&APPID=76f930f74c5541522f0143430bceb0ca";
		URL url = new URL(direction);
		return url;
	}

	private static String loadData(URL url)
			throws IOException, ProtocolException {
		HttpURLConnection connection = (HttpURLConnection) url.openConnection();
		connection.setRequestMethod("GET");
		String content = "";
		try {
			InputStream obtainData = connection.getInputStream();
			InputStreamReader lectorData = new InputStreamReader(obtainData);
			BufferedReader input = new BufferedReader(lectorData);
			String line;
			while ((line = input.readLine()) != null) {
				content += line + "\n";
			}
		} finally {
			connection.disconnect();
		}
		return content;
	}

	public static void saveData(String datos) {
		try {
			BufferedWriter fichero = new BufferedWriter(new FileWriter(FILE));
			String[] linea = datos.split("\n");
			for (int i = 0; i < linea.length; i++)
				fichero.write(linea[i] + "\r\n");
			fichero.close();
		} catch (FileNotFoundException fnfe) {
			System.out.println("El archivo no se ha podido guardar");
		} catch (IOException ioe) {
			new RuntimeException("Error de entrada/salida.");
		}
	}

	private static Current loadXml() throws JAXBException {
		File file = new File(FILE);
		JAXBContext jaxbContext = JAXBContext.newInstance(Current.class);
		Unmarshaller jaxbUnmarshaller = jaxbContext.createUnmarshaller();
		return (Current) jaxbUnmarshaller.unmarshal(file);
	}

}

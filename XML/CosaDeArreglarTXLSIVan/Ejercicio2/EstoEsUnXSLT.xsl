<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" version="1.0" encoding="utf-8" indent="yes"/>
    <xsl:template match="/">
        <html lang="es"/>
        <head>
            <title>Ejercicio 2 - Tarea 1</title>
            <meta name="author" content="Oscar Abad Lopez"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link href="estilo.css" type="text/css" rel="stylesheet"/>
        </head>
        <body>
            <header>
                <h1>Rutas</h1>
            </header>
            <main>
                <xsl:for-each select="rutas/ruta">
                    <article>
                        <h2>Ruta</h2>
                        <section>
                            <h3>Nombre:</h3>
                            <p>
                                <xsl:value-of select="nombre"/>
                            </p>
                        </section>
                        <section>
                            <h3>Tipo: </h3>
                            <p>
                                <xsl:value-of select="@tipo"/>
                            </p>
                        </section>
                        <section>
                            <h3>Medio transporte: </h3>
                            <p>
                                <xsl:value-of select="transporte"/>
                            </p>
                        </section>
                        <section>
                            <h3>Fecha de inicio: </h3>
                            <p>
                                <xsl:value-of select="fechaInicio"/>
                            </p>
                        </section>
                        <section>
                            <h3>Hora de inicio: </h3>
                            <p>
                                <xsl:value-of select="horaInicio"/>
                            </p>
                        </section>
                        <section>
                            <h3>Duracion: </h3>
                            <p>
                                <xsl:value-of select="duracion"/>
                            </p>
                        </section>
                        <section>
                            <h3>Agencia: </h3>
                            <p>
                                <xsl:value-of select="agencia"/>
                            </p>
                        </section>
                        <section>
                            <h3>Descripción: </h3>
                            <p>
                                <xsl:value-of select="descripcion"/>
                            </p>
                        </section>
                        <section>
                            <h3>La ruta es adecuada para: </h3>
                            <p>
                                <xsl:value-of select="adecuada"/>
                            </p>
                        </section>
                        <section>
                            <h3>Lugar de inicio: </h3>
                            <p>
                                <xsl:value-of select="lugarInicio"/>
                            </p>
                        </section>
                        <section>
                            <h3>Direccion de inicio: </h3>
                            <p>
                                <xsl:value-of select="direccionInicio"/>
                            </p>
                        </section>
                        <section>
                            <h3>Coordenadas: </h3>
                            <ul>
                                <li>
                                    <p>
                                        Latitud: <xsl:value-of select="coordenadas/latitud"/>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Longitud: <xsl:value-of select="coordenadas/longitud"/>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Altitud: <xsl:value-of select="coordenadas/altitud"/>
                                    </p>
                                </li>
                            </ul>
                        </section>
                        <section>
                            <h3>Referencias: </h3>
                            <p>
                                <ul>
                                    <xsl:for-each select="referencia">
                                        <li>
                                            <p>
                                                <a href="{.}">
                                                    <xsl:value-of select="."/>
                                                </a>
                                            </p>
                                        </li>
                                    </xsl:for-each>
                                </ul>
                            </p>
                        </section>
                        <section>
                            <h3>Recomendación: </h3>
                            <p>
                                <xsl:value-of select="recomendacion"/>
                            </p>
                        </section>
                        <section>
                            <h3>Hitos: </h3>
                            <p>
                                <xsl:for-each select="hitos/hito">
                                    <h4>Hito </h4>
                                    <ul>
                                        <li>
                                            <p>
                                                Nombre: <xsl:value-of select="nombre"/>
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Descripción: <xsl:value-of select="descripcion"/>
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Coordenadas:
                                            </p>
                                            <ul>
                                                <li>
                                                    <p>
                                                        Latitud: <xsl:value-of select="coordenadas/latitud"/>
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        Longitud: <xsl:value-of select="coordenadas/longitud"/>
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        Alitud: <xsl:value-of select="coordenadas/altitud"/>
                                                    </p>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <p>
                                                Distancia con el hito anterior: <xsl:value-of select="@distancia"/>
                                            </p>
                                        </li>
                                        <li>
                                            <p>Multimedia: </p>
                                            <ul>
                                                <li>
                                                    <p>Fotos: </p>
                                                    <ul>
                                                        <xsl:for-each select="fotos/foto">
                                                            <li>
                                                                <p>
                                                                    <img alt="Foto del hito: " src="{.}"/>
                                                                </p>
                                                            </li>
                                                        </xsl:for-each>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </xsl:for-each>
                            </p>
                        </section>
                    </article>
                </xsl:for-each>
            </main>
        </body>
    </xsl:template>

</xsl:stylesheet>

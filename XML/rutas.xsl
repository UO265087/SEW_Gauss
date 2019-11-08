<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" encoding="UTF-8" indent="yes"/>
    <xsl:template match="/rutas">
        <xsl:text disable-output-escaping="yes">&lt;!DOCTYPE html&gt; </xsl:text>
        <html lang="es">
            <head>
                <meta name="author" content="Sonia Garcia Lavandera"/>
                <meta name="viewport" content="width=device-width, user-scalable=1.0"/>
                <meta name="description" content="Distintas rutas"/>
                <meta name="keywords"
                      content="Rutas, aventura, comer, cascadas, gastronomia, playas, Ribadeo, Oviedo, Tapia de Casariego"/>
                <link rel="stylesheet" type="text/css" href="estilo.css"/>
                <title>Rutas</title>
            </head>
            <body>
                <header>
                    <h1>
                        Rutas Turísticas
                    </h1>
                </header>
                <main>
                    <xsl:for-each select="ruta">
                        <section>
                            <h2>
                                <xsl:value-of select="@nombre"/>
                            </h2>

                            <h3>Tipo de ruta:</h3>
                            <p>
                                <xsl:value-of select="@tipo"/>
                            </p>
                            <h3>Medio de transporte:</h3>
                            <p>
                                <xsl:value-of select="@medioDeTransporte"/>
                            </p>

                            <h3>Fecha de inicio de la ruta:</h3>
                            <p>
                                <xsl:value-of select="fechaInicio"/>
                            </p>
                            <h3>Hora de inicio de la ruta:</h3>
                            <p>
                                <xsl:value-of select="horaInicio"/>
                            </p>
                            <h3>Tiempo de duración de la ruta:</h3>
                            <p>
                                <xsl:value-of select="duracionRuta"/>
                            </p>
                            <h3>Agencia que gestiona la ruta:</h3>
                            <p>
                                <xsl:value-of select="agenciaRuta"/>
                            </p>
                            <h3>Descripción de la ruta:</h3>
                            <p>
                                <xsl:value-of select="descripcion"/>
                            </p>
                            <h3>Personas adecuadas para la ruta:</h3>
                            <p>
                                <xsl:value-of select="personasAdecuadas"/>
                            </p>
                            <h3>Lugar de inicio de la ruta:</h3>
                            <p>
                                <xsl:value-of select="lugarInicio"/>
                            </p>
                            <h3>Dirección de inicio de la ruta:</h3>
                            <p>
                                <xsl:value-of select="direccionInicio"/>
                            </p>
                            <p>
                                <h3>Coordenadas geográficas de inicio de la ruta:</h3>
                            </p>
                            <ul>
                                <li>
                                    <h3>Longitud:</h3>
                                    <xsl:value-of select="coordenadas//longitud"/>
                                </li>
                                <li>
                                    <h3>Latitud:</h3>
                                    <xsl:value-of select="coordenadas//latitud"/>
                                </li>
                                <li>
                                    <h3>Altitud:</h3>
                                    <xsl:value-of select="coordenadas//altitud"/>
                                </li>
                            </ul>
                            <p>
                                <h3>Referencias y bibliografía con información de la ruta:</h3>
                            </p>
                            <ul>
                                <xsl:for-each select="referencias//referencia">
                                    <li>
                                        <a href="{.}">
                                            <xsl:value-of select="."/>
                                        </a>
                                    </li>
                                </xsl:for-each>
                            </ul>
                            <p>
                                <h3>Recomendación de la ruta de 0 a 10:</h3>
                                <xsl:value-of select="recomendacion"/>
                            </p>
                            <p>
                                <h3>Hitos de la ruta:</h3>
                            </p>
                            <xsl:for-each select="hitos//hito">
                                <ul>
                                    <li>
                                        <h3>Nombre del sitio:</h3>
                                        <xsl:value-of select="@nombre"/>
                                    </li>

                                    <li>
                                        <h3>Descripción del sitio:</h3>
                                        <xsl:value-of select="descripcion"/>
                                    </li>


                                    <li>
                                        <h3>Coordenadas geográficas del sitio:</h3>
                                        <ul>
                                            <li>
                                                <h3>Longitud:</h3>
                                                <xsl:value-of select="coordenadas//longitud"/>
                                            </li>
                                            <li>
                                                <h3>Latitud:</h3>
                                                <xsl:value-of select="coordenadas//latitud"/>
                                            </li>
                                            <li>
                                                <h3>Altitud:</h3>
                                                <xsl:value-of select="coordenadas//altitud"/>

                                            </li>
                                        </ul>

                                    </li>

                                    <li>
                                        <h3>Distancia desde el hito anterior:</h3>
                                        <xsl:value-of select="distancia"/> (<xsl:value-of
                                            select="./distancia/@unidades"/>)
                                    </li>
                                    <li>
                                        <h3>Galeria de fotografías del sitio:</h3>
                                        <xsl:for-each select="fotos//foto">
                                            <img alt="Foto de la ruta." src="{.}"/>
                                        </xsl:for-each>
                                    </li>
                                    <li>
                                        <h3>Galería de videos del sitio:</h3>
                                    </li>
                                </ul>
                            </xsl:for-each>
                            <aside>
                                <h4>Diagrama SVG</h4>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 50">
                                    <polyline style="fill:white;stroke:#520496;stroke-width:1">
                                        <xsl:attribute name="points">
                                            <xsl:for-each select="hitos/hito/coordenadas">
                                                <xsl:variable name="altitud" select="altitud"/>
                                                <xsl:value-of select="20 * (position() - 1)"/>
                                                <xsl:text>,</xsl:text>
                                                <xsl:value-of select="$altitud div 10"/>
                                                <xsl:text> </xsl:text>
                                            </xsl:for-each>
                                        </xsl:attribute>
                                    </polyline>
                                </svg>
                            </aside>
                        </section>
                    </xsl:for-each>
                </main>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>

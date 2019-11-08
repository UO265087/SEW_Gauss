<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="utf-8" indent="yes"/>
  <xsl:template match="/">
    <xsl:text disable-output-escaping='yes'>&lt;!DOCTYPE html></xsl:text>
    <html lang="es">
      <head>
        <title>Rutas</title>
        <meta content="Miguel Rodriguez Huerta(UO258629)" name="author"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link href="rutas.css" type="text/css" rel="stylesheet"/>
      </head>
      <body>
        <header>
          <h1>Rutas</h1>
        </header>
        <main>
          <xsl:for-each select="ruta">
            <article>
              <h2>Ruta</h2>
              <p>
                <span class="pStart">Nombre: </span>
                <xsl:value-of select="nombre"/>
              </p>
              <p>
                <span class="pStart">Tipo: </span>
                <xsl:value-of select="tipo"/>
              </p>
              <p>
                <span class="pStart">Medio transporte: </span>
                <xsl:value-of select="transporte"/>
              </p>
              <p>
                <span class="pStart">Fecha: </span>
                <xsl:value-of select="fecha"/>
              </p>
              <p>
                <span class="pStart">Hora: </span>
                <xsl:value-of select="hora"/>
              </p>
              <p>
                <span class="pStart">Duracion: </span>
                <xsl:value-of select="duracion"/>
              </p>
              <p>
                <span class="pStart">Agencia: </span>
                <xsl:value-of select="agencia"/>
              </p>
              <p>
                <span class="pStart">Descripción: </span>
                <xsl:value-of select="descripcion"/>
              </p>
              <p>
                <span class="pStart">Personas adecuadas: </span>
                <xsl:value-of select="personasAdecuadas"/>
              </p>
              <p>
                <span class="pStart">Lugar de inicio: </span>
                <xsl:value-of select="lugarInicio"/>
              </p>
              <p>
                <span class="pStart">Calle de inicio: </span>
                <xsl:value-of select="calleInicio"/>
              </p>
              <p>
                Coordenada:
              </p>
              <ul>
                <li>
                  <p>
                    Latitud: <xsl:value-of select="./coordenada/latitud"/>
                  </p>
                </li>
                <li>
                  <p>
                    Longitud: <xsl:value-of select="./coordenada/longitud"/>
                  </p>
                </li>
                <li>
                  <p>
                    Alitud: <xsl:value-of select="./coordenada/altitud"/>
                  </p>
                </li>
              </ul>
            <p>
              <p>
                Bibliografia:
              </p>
              <ul>
                <xsl:for-each select="bibliografia/referencia">
                  <li>
                    <p>
                      <a href="{.}">
                        <xsl:value-of select="./bibliografia/referencia"/>
                      </a>
                    </p>
                  </li>
                </xsl:for-each>
              </ul>
            </p>
              <p>
                <span class="pStart">Recomendación: </span>
                <xsl:value-of select="recomendacion"/>
              </p>
              <p>
                <span class="pStart">Hitos: </span>
              </p>
              <xsl:for-each select="hitos/hito">
                <p>
                  <span class="pHitos">Hito </span>
                </p>
                <ul>
                  <li>
                    <p>
                      Sitio: <xsl:value-of select="./sitio"/>
                    </p>
                  </li>
                  <li>
                    <p>
                      Descripción: <xsl:value-of select="./descripcion"/>
                    </p>
                  </li>
                  <li>
                    <p>
                      Coordenada:
                    </p>
                    <ul>
                      <li>
                        <p>
                          Latitud: <xsl:value-of select="./coordenada/latitud"/>
                        </p>
                      </li>
                      <li>
                        <p>
                          Longitud: <xsl:value-of select="./coordenada/longitud"/>
                        </p>
                      </li>
                      <li>
                        <p>
                          Alitud: <xsl:value-of select="./coordenada/altitud"/>
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <p>
                      Distancia hito anterior: <xsl:value-of select="./distancia"/> <xsl:text> (</xsl:text><xsl:value-of select="./distanciaHitoAnterior/@unidadesDistancia"/><xsl:text>)</xsl:text>
                    </p>
                  </li>
                  <li>
                    <p>Multimedia: </p>
                    <ul>
                      <li>
                        <p>Galeria fotos</p>
                        <ul class="imgGaleria">
                          <xsl:for-each select="galeria">
                            <li>
                              <p>
                                <img alt="Foto de la ruta." src="{.}"/>
                              </p>
                            </li>
                          </xsl:for-each>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </xsl:for-each>
            </article>
          </xsl:for-each>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>

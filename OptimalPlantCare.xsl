<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
    <head>
        <title>Optimal Plant Care</title>
        <script src="tableHighlight.js" defer="defer"></script>
        <script src="reportGenerator.js" defer="defer"></script>
        <link rel="stylesheet" href="styles.css"/>
    </head>
    <body>
        <div class="table_content">
            <h1>Optimal Plant Care</h1>
            <table border="1" id="dataTable">
                <tr bgcolor="#9acd32">
                    <th style="text-align:left">PLANTS          </th>

                    <th style="text-align:left">Nitrogen(N)     <br/>
                                                Content         <br/>
                                                Ratio in soil   </th>

                    <th style="text-align:left">Phosphorous(P)  <br/>
                                                Content         <br/>
                                                Ratio in soil   </th>

                    <th style="text-align:left">Potassium(K)    <br/>
                                                Content         <br/>
                                                Ratio in soil   </th>

                    <th style="text-align:left">Temperature     <br/>
                                                (Celcius)       </th>

                    <th style="text-align:left">Relative        <br/>
                                                Humidity(%)     </th>

                    <th style="text-align:left">pH              </th>

                    <th style="text-align:left">rainfall        <br/>
                                                in mm           </th>
                </tr>
                <xsl:for-each select="data/row">
                    <tr>
                        <td><xsl:value-of select="label"/></td>
                        <td class="nitrogen">   <xsl:value-of select="format-number(N,           '#.00')"/></td>
                        <td class="phosphorus"> <xsl:value-of select="format-number(P,           '#.00')"/></td>
                        <td class="potassium">  <xsl:value-of select="format-number(K,           '#.00')"/></td>
                        <td class="temperature"><xsl:value-of select="format-number(temperature, '#.0')" /></td>
                        <td class="humidity">   <xsl:value-of select="format-number(humidity,    '#.00')"/></td>
                        <td class="ph">         <xsl:value-of select="format-number(ph,          '#.00')"/></td>
                        <td class="rainfall">   <xsl:value-of select="format-number(rainfall,    '#.00')"/></td>
                    </tr>
                </xsl:for-each>
            </table>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <div class="table_content">
            <h2>User Inputs</h2>
            <form id="inputForm">    
                <table border="1"> 
                    <tr>
                        <th style="text-align:left">Nitrogen(N)     <br/>
                                                    Content         <br/>
                                                    Ratio in soil   </th>

                        <th style="text-align:left">Phosphorous(P)  <br/>
                                                    Content         <br/>
                                                    Ratio in soil   </th>

                        <th style="text-align:left">Potassium(K)    <br/>
                                                    Content         <br/>
                                                    Ratio in soil   </th>

                        <th style="text-align:left">Temperature     <br/>
                                                    (Celcius)       </th>

                        <th style="text-align:left">Relative        <br/>
                                                    Humidity(%)     </th>

                        <th style="text-align:left">pH              </th>

                        <th style="text-align:left">rainfall        <br/>
                                                    in mm           </th>
                    </tr>
                    <tr> 
                        <td><input type="number" id="nitrogenInput"    name="nitrogenInput"     value="0"/></td> 
                        <td><input type="number" id="phosphorusInput"  name="phosphorusInput"   value="0"/></td>
                        <td><input type="number" id="potassiumInput"   name="potassiumInput"    value="0"/></td> 
                        <td><input type="number" id="temperatureInput" name="temperatureInput"  value="0"/></td> 
                        <td><input type="number" id="humidityInput"    name="humidityInput"     value="0"/></td> 
                        <td><input type="number" id="phInput"          name="phInput"           value="0"/></td> 
                        <td><input type="number" id="rainfallInput"    name="rainfallInput"     value="0"/></td>
                    </tr>
                    <tr>
                        <td colspan="7" style="text-align: center;">
                            <button id="submit">Check</button>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>    
    <div class="table_content">
        <div class="report_section">
            <h2>Report for Plants</h2>
            <pre id="reportOutput"></pre>
        </div>
    </div>
    </body>
</html>
</xsl:template>
</xsl:stylesheet>
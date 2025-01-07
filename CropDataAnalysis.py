import pandas as pd
import numpy as np

crops_df = pd.read_csv("Crop_recommendation.csv")

df = crops_df.copy()

mean_df = df.groupby("label").mean()

#mean_df.to_xml("OptimalPlantCare.xml")

def dfToXml(df,filename, xsl_href,index_=False, encode="utf-8"):
    fullfilename = filename
    df.to_xml(fullfilename,index=index_,root_name="data") #save df as xml
    #add xsl referance
    with open(fullfilename,"r",encoding=encode) as file:
        xml_content = file.read()
    xslt_reference = '<?xml-stylesheet type="text/xsl" href="%s"?>\n' % xsl_href
    xml_with_xslt  = xml_content.replace("<?xml version='1.0' encoding='utf-8'?>",
                                         "<?xml version='1.0' encoding='utf-8'?>\n" + xslt_reference)
    with open(fullfilename,"w",encoding=encode) as file:
        file.write(xml_with_xslt)

dfToXml(df            = mean_df,
        filename      = "OptimalPlantCare.xml",
        xsl_href      = "OptimalPlantCare.xsl",
        index_        = "False",
        encode        = "utf-8")
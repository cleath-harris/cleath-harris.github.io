var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_AdjudicatedPlanAreacopy_1 = new ol.format.GeoJSON();
var features_AdjudicatedPlanAreacopy_1 = format_AdjudicatedPlanAreacopy_1.readFeatures(json_AdjudicatedPlanAreacopy_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdjudicatedPlanAreacopy_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdjudicatedPlanAreacopy_1.addFeatures(features_AdjudicatedPlanAreacopy_1);
var lyr_AdjudicatedPlanAreacopy_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AdjudicatedPlanAreacopy_1, 
                style: style_AdjudicatedPlanAreacopy_1,
                interactive: true,
                title: '<img src="styles/legend/AdjudicatedPlanAreacopy_1.png" /> AdjudicatedPlanArea copy'
            });
var format_BasinBoundarycopy_2 = new ol.format.GeoJSON();
var features_BasinBoundarycopy_2 = format_BasinBoundarycopy_2.readFeatures(json_BasinBoundarycopy_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BasinBoundarycopy_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BasinBoundarycopy_2.addFeatures(features_BasinBoundarycopy_2);
var lyr_BasinBoundarycopy_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BasinBoundarycopy_2, 
                style: style_BasinBoundarycopy_2,
                interactive: true,
                title: '<img src="styles/legend/BasinBoundarycopy_2.png" /> BasinBoundary copy'
            });
var format_LosOsos_WellDatabase_v008__GIS_3 = new ol.format.GeoJSON();
var features_LosOsos_WellDatabase_v008__GIS_3 = format_LosOsos_WellDatabase_v008__GIS_3.readFeatures(json_LosOsos_WellDatabase_v008__GIS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LosOsos_WellDatabase_v008__GIS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LosOsos_WellDatabase_v008__GIS_3.addFeatures(features_LosOsos_WellDatabase_v008__GIS_3);
var lyr_LosOsos_WellDatabase_v008__GIS_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LosOsos_WellDatabase_v008__GIS_3, 
                style: style_LosOsos_WellDatabase_v008__GIS_3,
                interactive: true,
                title: '<img src="styles/legend/LosOsos_WellDatabase_v008__GIS_3.png" /> LosOsos_WellDatabase_v008__GIS'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_AdjudicatedPlanAreacopy_1.setVisible(true);lyr_BasinBoundarycopy_2.setVisible(true);lyr_LosOsos_WellDatabase_v008__GIS_3.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_AdjudicatedPlanAreacopy_1,lyr_BasinBoundarycopy_2,lyr_LosOsos_WellDatabase_v008__GIS_3];
lyr_AdjudicatedPlanAreacopy_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'AREAS': 'AREAS', 'area': 'area', 'Acres01': 'Acres01', });
lyr_BasinBoundarycopy_2.set('fieldAliases', {'Id': 'Id', 'NAME': 'NAME', 'NOTE': 'NOTE', });
lyr_LosOsos_WellDatabase_v008__GIS_3.set('fieldAliases', {'Name': 'Name', 'Name2': 'Name2', 'State_Num': 'State_Num', 'Well_Type': 'Well_Type', 'Well_Use': 'Well_Use', 'Status': 'Status', 'Local_ID': 'Local_ID', 'SiteCode': 'SiteCode', 'EW_ID': 'EW_ID', 'USGS_ID': 'USGS_ID', 'GT_Global': 'GT_Global', 'GT_FieldPt': 'GT_FieldPt', 'PubSupCode': 'PubSupCode', 'Contour': 'Contour', 'RP_Elev_DH': 'RP_Elev_DH', 'Compl_Type': 'Compl_Type', 'WCR_Num': 'WCR_Num', 'Date_Drill': 'Date_Drill', 'Date_Destr': 'Date_Destr', 'Depth': 'Depth', 'Cas_Mat': 'Cas_Mat', 'Open_Bot': 'Open_Bot', 'Cas_Diam': 'Cas_Diam', 'ScreenTop1': 'ScreenTop1', 'ScreenBot1': 'ScreenBot1', 'ScreenTyp1': 'ScreenTyp1', 'ScreenTop2': 'ScreenTop2', 'ScreenBot2': 'ScreenBot2', 'ScreenTyp2': 'ScreenTyp2', 'ScreenTop3': 'ScreenTop3', 'ScreenBot3': 'ScreenBot3', 'ScreenTyp3': 'ScreenTyp3', 'ScreenTop4': 'ScreenTop4', 'ScreenBot4': 'ScreenBot4', 'ScreenTyp4': 'ScreenTyp4', 'ScreenTop5': 'ScreenTop5', 'ScreenBot5': 'ScreenBot5', 'ScreenTyp5': 'ScreenTyp5', 'Confidentl': 'Confidentl', 'Basin_Subb': 'Basin_Subb', 'County': 'County', 'Region': 'Region', 'Lat_NAD83': 'Lat_NAD83', 'Lon_NAD83': 'Lon_NAD83', 'Loc_Descr': 'Loc_Descr', 'Coord_Mthd': 'Coord_Mthd', 'Coord_Acc': 'Coord_Acc', 'GS_Elev': 'GS_Elev', 'RP_Elev': 'RP_Elev', 'RP_Descr': 'RP_Descr', 'Elev_Mthd': 'Elev_Mthd', 'Elev_Acc': 'Elev_Acc', 'Mgmt_Area': 'Mgmt_Area', 'GSA_Name': 'GSA_Name', 'Purv_Name': 'Purv_Name', 'Owner_Name': 'Owner_Name', 'Data_Src': 'Data_Src', 'Princp_Aq': 'Princp_Aq', 'Transmiss': 'Transmiss', 'Conduct': 'Conduct', 'Storatvty': 'Storatvty', 'Porosity': 'Porosity', 'Descriptn': 'Descriptn', 'Notes': 'Notes', 'Filename': 'Filename', 'sort1': 'sort1', 'sort2': 'sort2', });
lyr_AdjudicatedPlanAreacopy_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', 'AREAS': 'TextEdit', 'area': 'TextEdit', 'Acres01': 'TextEdit', });
lyr_BasinBoundarycopy_2.set('fieldImages', {'Id': 'TextEdit', 'NAME': 'TextEdit', 'NOTE': 'TextEdit', });
lyr_LosOsos_WellDatabase_v008__GIS_3.set('fieldImages', {'Name': 'TextEdit', 'Name2': 'TextEdit', 'State_Num': 'TextEdit', 'Well_Type': 'TextEdit', 'Well_Use': 'TextEdit', 'Status': 'TextEdit', 'Local_ID': 'TextEdit', 'SiteCode': 'TextEdit', 'EW_ID': 'TextEdit', 'USGS_ID': 'TextEdit', 'GT_Global': 'TextEdit', 'GT_FieldPt': 'TextEdit', 'PubSupCode': 'TextEdit', 'Contour': 'TextEdit', 'RP_Elev_DH': 'TextEdit', 'Compl_Type': 'TextEdit', 'WCR_Num': 'TextEdit', 'Date_Drill': 'TextEdit', 'Date_Destr': 'TextEdit', 'Depth': 'TextEdit', 'Cas_Mat': 'TextEdit', 'Open_Bot': 'TextEdit', 'Cas_Diam': 'TextEdit', 'ScreenTop1': 'TextEdit', 'ScreenBot1': 'TextEdit', 'ScreenTyp1': 'TextEdit', 'ScreenTop2': 'TextEdit', 'ScreenBot2': 'TextEdit', 'ScreenTyp2': 'TextEdit', 'ScreenTop3': 'TextEdit', 'ScreenBot3': 'TextEdit', 'ScreenTyp3': 'TextEdit', 'ScreenTop4': 'TextEdit', 'ScreenBot4': 'TextEdit', 'ScreenTyp4': 'TextEdit', 'ScreenTop5': 'TextEdit', 'ScreenBot5': 'TextEdit', 'ScreenTyp5': 'TextEdit', 'Confidentl': 'TextEdit', 'Basin_Subb': 'TextEdit', 'County': 'TextEdit', 'Region': 'TextEdit', 'Lat_NAD83': 'TextEdit', 'Lon_NAD83': 'TextEdit', 'Loc_Descr': 'TextEdit', 'Coord_Mthd': 'TextEdit', 'Coord_Acc': 'TextEdit', 'GS_Elev': 'TextEdit', 'RP_Elev': 'TextEdit', 'RP_Descr': 'TextEdit', 'Elev_Mthd': 'TextEdit', 'Elev_Acc': 'TextEdit', 'Mgmt_Area': 'TextEdit', 'GSA_Name': 'TextEdit', 'Purv_Name': 'TextEdit', 'Owner_Name': 'TextEdit', 'Data_Src': 'TextEdit', 'Princp_Aq': 'TextEdit', 'Transmiss': 'TextEdit', 'Conduct': 'TextEdit', 'Storatvty': 'TextEdit', 'Porosity': 'TextEdit', 'Descriptn': 'TextEdit', 'Notes': 'TextEdit', 'Filename': 'TextEdit', 'sort1': 'TextEdit', 'sort2': 'TextEdit', });
lyr_AdjudicatedPlanAreacopy_1.set('fieldLabels', {'OBJECTID': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', 'AREAS': 'no label', 'area': 'no label', 'Acres01': 'no label', });
lyr_BasinBoundarycopy_2.set('fieldLabels', {'Id': 'no label', 'NAME': 'no label', 'NOTE': 'no label', });
lyr_LosOsos_WellDatabase_v008__GIS_3.set('fieldLabels', {'Name': 'inline label', 'Name2': 'inline label', 'State_Num': 'inline label', 'Well_Type': 'inline label', 'Well_Use': 'inline label', 'Status': 'inline label', 'Local_ID': 'inline label', 'SiteCode': 'inline label', 'EW_ID': 'inline label', 'USGS_ID': 'inline label', 'GT_Global': 'inline label', 'GT_FieldPt': 'inline label', 'PubSupCode': 'inline label', 'Contour': 'inline label', 'RP_Elev_DH': 'inline label', 'Compl_Type': 'inline label', 'WCR_Num': 'inline label', 'Date_Drill': 'inline label', 'Date_Destr': 'inline label', 'Depth': 'inline label', 'Cas_Mat': 'inline label', 'Open_Bot': 'inline label', 'Cas_Diam': 'inline label', 'ScreenTop1': 'inline label', 'ScreenBot1': 'inline label', 'ScreenTyp1': 'inline label', 'ScreenTop2': 'inline label', 'ScreenBot2': 'inline label', 'ScreenTyp2': 'inline label', 'ScreenTop3': 'inline label', 'ScreenBot3': 'inline label', 'ScreenTyp3': 'inline label', 'ScreenTop4': 'inline label', 'ScreenBot4': 'inline label', 'ScreenTyp4': 'inline label', 'ScreenTop5': 'inline label', 'ScreenBot5': 'inline label', 'ScreenTyp5': 'inline label', 'Confidentl': 'inline label', 'Basin_Subb': 'inline label', 'County': 'inline label', 'Region': 'inline label', 'Lat_NAD83': 'inline label', 'Lon_NAD83': 'inline label', 'Loc_Descr': 'inline label', 'Coord_Mthd': 'inline label', 'Coord_Acc': 'inline label', 'GS_Elev': 'inline label', 'RP_Elev': 'inline label', 'RP_Descr': 'inline label', 'Elev_Mthd': 'inline label', 'Elev_Acc': 'inline label', 'Mgmt_Area': 'inline label', 'GSA_Name': 'inline label', 'Purv_Name': 'inline label', 'Owner_Name': 'inline label', 'Data_Src': 'inline label', 'Princp_Aq': 'inline label', 'Transmiss': 'inline label', 'Conduct': 'inline label', 'Storatvty': 'inline label', 'Porosity': 'inline label', 'Descriptn': 'inline label', 'Notes': 'inline label', 'Filename': 'inline label', 'sort1': 'inline label', 'sort2': 'inline label', });
lyr_LosOsos_WellDatabase_v008__GIS_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
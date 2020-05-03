<?php

    include('db.php');
    $req = $db->query('SELECT * FROM sencarto ORDER BY site_ID');
    $result = [];

    while ($row = $req->fetch(PDO::FETCH_OBJ)) {
        $result[] =  [
            'id'                            => $row->site_ID,
            'name'                          => $row->site_name,
            'address'                       => $row->site_geo_address,
            'ville'                         => $row->site_geo_ville,
            'region'                        => $row->site_geo_region,
            'latitude'                      => $row->site_geo_latitude,
            'longitude'                     => $row->site_geo_longitude,
            'NGF'                           => $row->site_NGF,
            'support_height'                => $row->site_support_height,
            'support_type'                  => $row->site_support_type,
            'techno'                        => $row->site_techno,
            'OPP'                           => $row->site_OPP,
            'antenna'                       => $row->site_antenna,
            'antenna_height'                => $row->site_antenna_height,
            'antenna_number'                => $row->site_antenna_number,
            'antenna_azimut'                => $row->site_antenna_azimut,
            'antenna_directivity'           => $row->site_antenna_directivity,
            'antenna_tilt'                  => $row->site_antenna_tilt,
            'antenna_frequency'             => $row->site_antenna_frequency,
            'anntena_Transmit_power'        => $row->site_anntena_Transmit_power,
            'antenna_gain'                  => $row->site_antenna_gain,
            'antenna_modulation_type'       => $row->site_antenna_modulation_type,
            'antenna_polarization'          => $row->site_antenna_polarization,
            'antenna_sensibility'           => $row->site_antenna_sensibility,
            'antenna_bandwidth'             => $row->site_antenna_bandwidth,
            'antenna_modulation_diversity'  => $row->site_antenna_modulation_diversity,
            'techno_date'                   => $row->site_techno_date


            
        ];
    };

    $req->closeCursor();

    echo json_encode($result);
    //return json_encode($result);

?>



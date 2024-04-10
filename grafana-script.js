import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    vus: 1,
    duration: '30s',
}

export default function () {
    http.get('https://test.k6.io');
    sleep(1);
}

// login to cloud using token from Grafana settings
//k6 login cloud --token 3f1b1fc31c2849ec132e2dec1391cbfd6a7869924a715683144502cccdbcd6d3

// Run script on Cloud
//k6 cloud grafana-script.js


const fs = require("fs-extra");
const uuids = require("uuid");

// Ensure a minimum of 1000
const randomNumber = () => (Math.random() * 1000000.0 + 1000.0).toFixed(2);

const exhangeRates = {
  MXN: 1,
  USD: 18.3122,
};

const create = ({
  amount = 20,
  emitterTaxId = "",
  emitterName = "",
  receiverTaxId = "",
  receiverName = "",
  type = "PPD",
  currency = "MXN",
}) => {
  for (let i = 0; i < amount; i++) {
    const uuid = uuids.v4();
    const productTotal = randomNumber();
    const folio = uuids.v4().split("-")[0];
    const taxes = productTotal * 0.16;
    const total = productTotal + taxes;

    const xmlString = `<?xml version="1.0" encoding="utf-8"?><cfdi:Comprobante xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sat.gob.mx/cfd/3 http://www.sat.gob.mx/sitio_internet/cfd/3/cfdv33.xsd" LugarExpedicion="66220" MetodoPago="${type}" TipoDeComprobante="I" Total="${total}" Moneda="${currency}" TipoCambio="${exhangeRates[currency]}" Certificado="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" SubTotal="${productTotal}" CondicionesDePago="60 dias" NoCertificado="00001000000500097562" FormaPago="03" Sello="psfeYqdRdk3R5BrP7ItpappsGGqBPjSpRVyQoPEdTP0RlWPowDCqiRFRCjlbhhz4gTOy0PLLlYI4Ixy2E2jNS+TA0NeAfk+44L5pfbJuyZoqmlXLmk5ZsD8krr7M+lw2hBvUClHcdL/s18hBZCCVIoWTrF61cOaWaCXbka1SlL/kOA2tvzRFrkVXHJlx+QYxbMSRFaXTpu8kgdSnjId4dfYbGFHJVejYksad96tcuAvJcE3EpypYR7CRNUtV7A15BvtgaWApZKovgS/y7nRvMEiiClH0SZk150bah3Qd1njH1MHy0WCNcqokY3sVN/DYxcwrrK4NvcMy54y/5Y9DyQ==" Fecha="2020-06-05T17:33:18" Folio="${folio}" Serie="123456789" Descuento="0.00" Version="3.3" xmlns:cfdi="http://www.sat.gob.mx/cfd/3"><cfdi:Emisor Rfc="${emitterTaxId}" Nombre="${emitterName}" RegimenFiscal="601"></cfdi:Emisor><cfdi:Receptor Rfc="${receiverTaxId}" Nombre="${receiverName}" UsoCFDI="G03"></cfdi:Receptor><cfdi:Conceptos><cfdi:Concepto ClaveProdServ="43232804" NoIdentificacion="SaaS" Cantidad="1" ClaveUnidad="ACT" Unidad="subscripción" Descripcion="Descripcion de Producto" ValorUnitario="${productTotal}" Importe="${productTotal}" Descuento="0.00"><cfdi:Impuestos><cfdi:Traslados><cfdi:Traslado Base="${productTotal}" Impuesto="002" TipoFactor="Tasa" TasaOCuota="0.160000" Importe="${taxes}"></cfdi:Traslado></cfdi:Traslados></cfdi:Impuestos></cfdi:Concepto></cfdi:Conceptos><cfdi:Impuestos TotalImpuestosTrasladados="${taxes}"><cfdi:Traslados><cfdi:Traslado Impuesto="002" TipoFactor="Tasa" TasaOCuota="0.160000" Importe="${taxes}"></cfdi:Traslado></cfdi:Traslados></cfdi:Impuestos><cfdi:Complemento><tfd:TimbreFiscalDigital xmlns:tfd="http://www.sat.gob.mx/TimbreFiscalDigital" xsi:schemaLocation="http://www.sat.gob.mx/TimbreFiscalDigital http://www.sat.gob.mx/sitio_internet/cfd/TimbreFiscalDigital/TimbreFiscalDigitalv11.xsd" Version="1.1" UUID="${uuid}" FechaTimbrado="2020-06-05T17:44:28" RfcProvCertif="SAT970701NN3" SelloCFD="psfeYqdRdk3R5BrP7ItpappsGGqBPjSpRVyQoPEdTP0RlWPowDCqiRFRCjlbhhz4gTOy0PLLlYI4Ixy2E2jNS+TA0NeAfk+44L5pfbJuyZoqmlXLmk5ZsD8krr7M+lw2hBvUClHcdL/s18hBZCCVIoWTrF61cOaWaCXbka1SlL/kOA2tvzRFrkVXHJlx+QYxbMSRFaXTpu8kgdSnjId4dfYbGFHJVejYksad96tcuAvJcE3EpypYR7CRNUtV7A15BvtgaWApZKovgS/y7nRvMEiiClH0SZk150bah3Qd1njH1MHy0WCNcqokY3sVN/DYxcwrrK4NvcMy54y/5Y9DyQ==" NoCertificadoSAT="00001000000403258748" SelloSAT="Nc5ghlaVLRbIozfy3/X4S3GeDcvrcX2R1BZYrwHEePdzhKaxF0BdHhZl4WHMgnHqItd291ZVqgCP6R9AnccR/crwijrF9Cr+OJUfdN1JGk+Z9zyXfN+mf35v8tN7PEV4LnnpiTez307cUk38BGN63qbtTZqz86ESLCZkTqIBLldK3UxjRCu0e1idDKmUVsB5W96iSYbjT1VnJKH/Q4SgJlX6OTo8/nlZerpWVdyytwNJ47H0/sZMQmoc7xAI0RheEUWP+7rESmT+D9z5SgaIXooezHnGViyKZJUt+yl8k0I1Y0PBzT2GKzpzk8radPTdjGFDuJrWaclVHBYCPwxlzQ==" /></cfdi:Complemento></cfdi:Comprobante>`;

    fs.outputFile(
      `${__dirname}/documents/${receiverTaxId}/${uuid}.xml`,
      xmlString,
      { encoding: "utf-8", flag: "w" },
      (error) => {
        if (error) {
          throw new commander.CommanderError(
            `Something went wrong when writing file: ${error}`
          );
        }
      }
    );
  }
};

module.exports = create;

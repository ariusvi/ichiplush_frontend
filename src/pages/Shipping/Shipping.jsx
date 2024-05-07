import './Shipping.css'

export const Shipping = () => {
    return (
        <div className='shippingDesign'>
            <div className='shippingTitle'>Política de envío</div>
            <div className='shippingCenter'>
                <div className='shippingText'>
                    <p>Una vez confeccionado su producto, su pedido requerirá un período de preparación de entre 2-3 días hábiles.</p>
                    <p>La entrega tras el envío toma 24-72h para Envío Estándar 3-15 días si es ordinario (en Península y Baleares). En casos excepcionales, el envío puede retrasarse, solicitamos paciencia. Realizamos envíos a toda España a través de Correos.</p>
                    <p>Los envíos a Canarias, Ceuta y Melilla pueden experimentar demoras debido a trámites aduaneros.</p>
                    <h1>Precio del envío</h1>
                    <p>El costo de envío no está incluido en el precio del producto. Tiene un cargo adicional de 6,50€ para Envío Estándar (Península); 7,99€ para Envío Estándar(Baleares, Ceuta y Melilla); y 13,99€ para Envío Estándar(Canarias)</p>
                    <h1>Otras observaciones</h1>
                    <p>Los envíos llevarán un código de seguimiento que se le entregará al cliente </p>
                </div>
            </div>
        </div>
    )
}
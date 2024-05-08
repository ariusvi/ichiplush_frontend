import "./Faq.css";

export const Faq = () => {
    return (
        <div className='faqDesign'>
            <div className='faqTitle'>Preguntas frecuentes</div>
            <div className='faqCenter'>
                <div className='faqText'>
                    <h2>¿Cuánto tiempo tarda en confeccionar mi pedido?</h2>
                    <p>El tiempo de realización del encargo puede variar entre 2 o 3 semanas, dependiendo de su complejidad. Si deseas un encargo urgente, el precio aumentará un 20% del total. (NOTA: el tiempo puede aumentar si no dispongo de los tejidos)</p>

                    <h2>¿Qué hago si mi pedido llega dañado?</h2>
                    <p>Si tu pedido llega dañado, por favor contáctanos a través de nuestro formulario de contacto y te ayudaremos a resolver el problema lo antes posible.</p>

                    <h2>¿Puedo devolver mi pedido?</h2>
                    <p>Si no estás satisfecho con tu pedido, por favor contáctanos a través de nuestro email de contacto y te ayudaremos a resolver el problema lo antes posible.</p>

                    <h2>Tengo prisa para tener mi peluche ¿cuánto puede costar?</h2>
                    <p>La tarifa urgente será de +50% del precio de tu pedido. </p>
                </div>
            </div>
        </div>
    )
};
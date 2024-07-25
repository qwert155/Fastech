import React from 'react'
import './Map.css'
const Map = () => {
  return (
<div>
    <div className="map">
        <h1>Наш <span>Федиал</span></h1>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.818269725749!2d69.29269027656584!3d41.378032896574425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef3899df8dc85%3A0x930a078bd707c77b!2zRmFzdGVjaCBJVCBBY2FkZW15IC0g0KPRh9C10LHQvdGL0Lkg0YbQtdC90YLRgA!5e0!3m2!1sen!2s!4v1721496053110!5m2!1sen!2s"
       width="70%" height="450" 
       allowfullscreen=""
         loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</div>
  )
}

export default Map;
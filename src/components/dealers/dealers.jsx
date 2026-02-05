import styles from './dealers.module.scss';

export default function Dealers(props) {
    const src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.598942831907!2d30.320508377304133!3d59.938796862087294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310fca5afc31%3A0xa24b26c0d196de71!2z0JHQvtC70YzRiNCw0Y8g0JrQvtC90Y7RiNC10L3QvdCw0Y8g0YPQuy4sIDE5LCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywg0KDQvtGB0YHQuNGPLCAxOTExODY!5e0!3m2!1sru!2sno!4v1770318276596!5m2!1sru!2sno"

    return (
        <div className={styles.dealers}>
            <div className={styles.text}>
                <div className={styles.content}>приглашаем к сотрудничеству дилеров!</div>
                <div className={styles.address}>
                    <span>ул. Большая Конюшенная, д. 19/8</span>
                    <span>Санкт-Петербург</span>
                </div>
            </div>
            <div className={styles.map}>
                {/* <iframe 
                src={src} 
                width="600" 
                height="450" 
                style="border:0;" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                ></iframe> */}
            </div>
        </div>
    )
}




// import React from 'react';

// const MapIframe = ({ lat = 55.7558, lng = 37.6173, width = '100%', height = '400' }) => {
//   const src = `https://www.google.com/maps?q=${lat},${lng}&output=embed`;

//   return (
//     <iframe
//       title="map"
//       src={src}
//       width={width}
//       height={height}
//       style={{ border: 0 }}
//       allowFullScreen
//       loading="lazy"
//       referrerPolicy="no-referrer-when-downgrade"
//     ></iframe>
//   );
// };

// export default MapIframe;
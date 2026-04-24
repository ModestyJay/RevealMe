import { useState } from "react";
import { categoryColors, defaultColor } from "../../data/categoryColors";
import { getInitials } from "../../utils/getInitials";
import styles from "./Avatar.module.css";

export default function Avatar({ name, category, image }) {
  const [imgError, setImgError] = useState(false);

  const showImage = image && !imgError;
  const colors = categoryColors[category] || defaultColor;

  return (
    <div className={styles.avatar}>
      {showImage ? (
        <img
          src={image}
          alt={name}
          className={styles.avatarImage}
          onError={() => setImgError(true)}
          loading="lazy"
        />
      ) : (
        <div
          className={styles.avatarFallback}
            style={{
            background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`,
          }}
        >
          {getInitials(name)}
        </div>
      )}
    </div>
  );
}
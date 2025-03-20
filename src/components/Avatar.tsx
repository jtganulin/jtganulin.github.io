export default function Avatar({ width, height, style }: { width?: number | string; height?: number | string; style: object; }) {
    return (
        <img src="/images/Me.webp" alt="Jeffrey Ganulin" width={width} height={height} style={{
            borderRadius: "1rem",
            border: "2px solid var(--color-accent)",
            aspectRatio: 1.3333,
            objectFit: "cover",
            display: "flex",
            alignSelf: "center",
            justifySelf: "center",
            ...style
        }}
        />
    );
}

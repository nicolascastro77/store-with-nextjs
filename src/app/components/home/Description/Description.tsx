import Image from "next/image";

// const PLACEHOLDER_IMAGE = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCANoAzYDASIAAhEBAxEB/8QAGgABAQEAAwEAAAAAAAAAAAAAAAECAwUGBP/EABgQAQEBAQEAAAAAAAAAAAAAAAABEQIx/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/AOvAZcwAABQAARUAAAAARUAAFQABFQAABFQABRAAEVBQABFQBFQABQABAAAAABRFQQAAAUUAAAAAFAAABQAAAUABUUQVFAAAVFQFRQABFAAABQAAAUAAAAAAAFAAAAABAGAAAAUAAEAAAAABFQAAVAAEVAAAEVAAFEAARUFAAEABFQABQABAAAAABRAEAAAFFEUAAAAFEUAAFAAABQAFRRBUUAABUVAVFAAEUAAAFAAABQAAAAAAAURQAAAAQBgAAAFAAEAAAAAARUAAFQABFQAABFQABRAAEVAABUAARUAAUAAQAAAAAEAAAAAUFRQAAAAFRQAAUAAAFAAVFEFRQAAFRUBUAUARRFAABRFAABRFAAAAAAAABRAFEAAGAAAAUAAQAAAAABFQAAVAAEVAAAEVAARQAARUAAFQABFQABQABAAAAAQAAAAABQVAFAAAAVFAABQAAAFRRBUUAAFAAVFQAAUAQVFAAAVFAAAVAFAAAAAAAAAAAAAYABQAABAAAAAAAEAAAVAAEVAAAEVAEVFAABFQAAVAAEVAAFAAEAAAARUAAAAAAUAAUAAABUUAABUUAABUUBUUQABRFAAQUAFAEAAUAAAFAAAAVAFAAAAAAAAAAAZAAAABFQAAAAAAEAAABABRFQAABFRQRUAAARUAAFQABFQABQABAAAAEVAAAAAAFAAFEUAAAAFAAVFAAAVFAAEUABUAUBBQAFRRAABUAUABUUAAAABUAURQAAAAAAAGQAABEABQAAAARUAAARUAAFEAAABFRQRUAAARUARUFAAEVAAFAAEAAAARUAAAAAAAAUFRQAAAAUAAAFEUAARQAUAAAFAQFRQABFAAABRFAABRFAAAAAAAABRAFEAUBgAAEBQAAAABAAAAAEVAABUAAABAAEVFAABFQBFQUAARUAAUEVAAAAAEVAAAAAAAAFBUAUAAAFEUAABUUAARQAFRQAAFRUAAFAEFQBQAFQBQAAAUQBQAAAAAAAAAUQZAAAAAAAABAAAAAARUAAFQAAAEAARUUAAEVAEVAABQEAAUEVAAAAAEVAAAAAAAAFAAFAAAAVFAAAABQBBUUAAFEUABBQAFRRAABUAUABUAUAAAAABUAUQBRAFEAUBkAAAAAAAQAAAAAAEAABBQAAAEAUEVAAAEVAEVAABRFQABQRUAAAAARUAAAAAAAAAAUURQAAFQBQAAAFRRAAFAAABQEBUAUARRFAAAVAFAAABRAFEUAAAAAAAAFAYAAABQAAQAAAAAEAAABFQUAABFAABAAAARUARUAAFEAABQRUAAAAAABAAAAAAAAAFBUUAAAABUAUABUBFAAVAFAAVBBQAURRAABUAUABUAURQAAAAAAAAUQBRAGgGQAAAAQAAAAAEVAAAAAEVAABRAAAUQAAABAARUAABABQBQRUAAAAAABAAAAAFAAAAAAFAAAAAAVFAAEURQAAFQBQEBUAUARRAFAAABRFAAAABRAFEAUQBRAFABoQYFEAVAUAAAAAAQAAAAEAAABBQAABRAAAQAABFQAAEAFAFBFQAAAAAAEAAAAAUAAAAAAFQBRFAAAAEURQAAURQAAFQQUABUBFAAABRAFAAVAFEAURQAAAAAAAAaAZAAAAAAAABAAAABAAAAAEVAABQEUAAEVAAAEVAAAQAABVEVBAAUAAABAAAAAAAFAAAAAAAAFEUAAQABQAAAFQBQEBUAUAQABRAFEUAAFEAURQAAAAAAAAAAbAZAAAAAABAAAAAAQAAAAAEAABVEAAABFQAABFQAAEAAAUEUFQAQAFEVAAAAAAFAAAAAAAAAAAAFEUQAAVAFEAUAABBRFAAEUQBRFAAAVAFEAUAAAAAAAAAAAHIAyAAAACAAAAAACAAAAAIAAAAIAAqgAIAAACAAAAgCgAACAAAACoAAAAAAAoAAAAAgKAAAAAIAAKgCgAAAAAogCgICoCKIoAAAAKIAogCgAAAAAKgCiAKIA5AGQAAAAAAAAABAAAAEVAAAAAEVAAFUBAAAEVAAAAAQBQAAQAAAAAQAUAAAAAUBAAAAAAABUAUQEUAAAAAFEAUQBQAFQQUQEUAAAAAFEAUQBQAAAAAAAUQBRAHKAyAAAAAAAACAAAAACAAAAAAICgACACgACKgAAAAIAoAAgAAAAAIAAAKACIAqgAAAgAKAAACAACoAogCgAAAAAAAoggoiiAAAAAAKIAogCiAKAAAAAAAAADmEGRRAFEAAAAAAAAAEAAAAAABRAAAAQAAABFQUAARUAAUAAQAAAAABFQAAAAEAFABABVABAAAAAAAAAAAAAAAABUAUQBQBAAABAAAVAFEAUQBRAFEAURQAAAAcwDIAAAAAAAAAAIAAAAAAICoAACgioAAAAAioKAAIqAAAAKIAAAAAAioAAAACAAAKAAAAAAAgCiAKIAogCiAKgAogCiAKIoAAgAAAgAAAAAAogCiAKIAogCiAKIA+gQZFEAUQBRAAAAAAAAAAEAAAAUAAEAAAAABAAAFEVAAAAAEVFAAAABAAAAABAFAAAAAEAAAAAAAAAAABAUQBRAFEAURQABAAAQQUQBRAFEAU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"

export const Description = () => {
  return (
    <div className="max-w-4xl mx-auto flex items-center space-x-10 py-8">
      <Image src="/images/img-home.png" alt="Descripción de la tienda"
        quality={100}
        width={400}
        height={350}
        // fill
        // placeholder="blur"
        // blurDataURL={PLACEHOLDER_IMAGE}
        className=" rounded-lg drop-shadow-xl" />
      <div>
        <h2 className=" text-gray-800 mb-4">Bienvenido a Future World</h2>
        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis pharetra est, ac fermentum turpis ultrices sit amet. Sed vitae nisl vitae eros malesuada eleifend. Proin tempor ligula vel libero placerat, a dapibus ligula facilisis.</p>
      </div>
    </div>
  );
}

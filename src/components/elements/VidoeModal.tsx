"use client";
import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,

  ModalHeader,
} from "@nextui-org/react";
import { useDisclosure } from "@nextui-org/react";
import PlayIcon from "../icons/PlayIcon";

export default function VideoModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="relative">
      <Image src="/images/video.png"  />
      <button    className="absolute rounded-full   bg-bgcolor size-16 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center pl-2 " onClick={onOpen} >
      <PlayIcon/>
      </button>
      <Modal
        backdrop="opaque"
        classNames={{
          body: "",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: " ",
header: "text-[#735CFF]",
          closeButton: "hover:bg-white/5 active:bg-white/10 hidden ",
        }}
        className=" mb-44"
        isOpen={isOpen}
        radius="lg"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
                    <ModalHeader onClick={onClose}> close</ModalHeader>

              <ModalBody className="my-4 px-5  scrollbar-hide">
                <iframe
               
                  height="315"
                  scrolling="false"
                  src="https://www.youtube.com/embed/s-x_HVCwKgI?si=AxjaSQYj7fqFLTXU"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="rounded-md w-full "
                ></iframe>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

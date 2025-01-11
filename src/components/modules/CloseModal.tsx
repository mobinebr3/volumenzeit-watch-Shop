"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { signOut } from "next-auth/react";

export default function CloseModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button color="danger" onPress={onOpen}>
        Signout
      </Button>
      <Modal
        backdrop="blur"
        className="my-96 mx-8"
        isOpen={isOpen}
        radius="lg"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col ">
                Are you sure you went to log out?
              </ModalHeader>

              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  className="bg-[#6f4ef2] shadow-lg shadow-indigo-500/20 text-white"
                  onPress={onClose}
                  onClick={() => signOut()}
                >
                  leave account
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}


import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
 
} from "@nextui-org/react";
import { useState } from "react";

function Modals({ onopen }: any) {
  const [isOpen, setClose] = useState(true);

  
  return (
    <Modal backdrop="blur" isOpen={isOpen} >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Modal Title
            </ModalHeader>
            <ModalBody>
             
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Action
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default Modals;

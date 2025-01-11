import api from '@/server/papi';
import { GetProducts } from '@/store/redux/products';
import { Button, Modal, ModalBody, ModalContent, ModalFooter, useDisclosure } from '@nextui-org/react';
import React from 'react'
import { MdDelete } from 'react-icons/md'
import { toast } from 'react-toastify';

function DeleteBuuton({_id , dispatch}:any) {
       const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
       const DelHandler = async ()=>{
       const statuss = await api.delete(`/api/account/admin/${_id}`)
    if (statuss.status === 201) {
      toast.success(statuss.data.message);
      dispatch(GetProducts())
    } else {
      toast.error(statuss.data.error);
    }
  };
  return (<>
       <h2 className="text-red-600 flex  items-center" onClick={onOpen} >
       {" "}
       <MdDelete />
       Delete{" "}
     </h2><Modal isOpen={isOpen} onOpenChange={onOpenChange} className='mb-60'>
        <ModalContent>
          {(onClose) => (
            <>
             
              <ModalBody>
     <h1 className=' mt-5'>Are you sure you want to delete this product ?</h1>
              </ModalBody>
              <ModalFooter>
                <Button color="success" variant="ghost" onPress={onClose}>
                  Close
                </Button>
                <Button color="danger" variant="light" onPress={onClose} onClick={DelHandler}>
                  Delete
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal></>
  )
}

export default DeleteBuuton
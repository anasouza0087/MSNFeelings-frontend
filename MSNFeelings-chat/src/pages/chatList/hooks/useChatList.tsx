import { useCallback, useEffect, useState } from "react";
import type { IChatroom } from "../../../services/chatroom/types";
import { createChatroomService, listChatroomsService } from "../../../services";

export const useChatList = () => {
  const [openCreateChatModal, setOpenCreateChatModal] =
    useState<boolean>(false);
  const [chatrooms, setChatrooms] = useState<any[]>([]);

  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isFilter, setIsFilter] = useState<boolean>(false);

  const onCreateChatroom = (body: IChatroom) => {
    createChatroomService(body).then((resp: any) => {
      setOpenCreateChatModal(false);
    });
  };

  // const onListChatrooms = useCallback(
  //   async (filter?: string) => {
  //     if (!hasMore || isLoading) return;

  //     setIsLoading(true);
  //     try {
  //       const resp: any = await listChatroomsService(page, filter);

  //       setChatrooms((prev) => [...prev, ...resp.data.data]);
  //       setHasMore(resp.data.pagination.page < resp.data.pagination.totalPages);
  //       setPage((prev) => prev + 1);
  //     } catch (err) {
  //       console.error(err);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   },
  //   [hasMore, isLoading, page]
  // );

  const onListChatrooms = useCallback(
    async () => {
      debugger
      if (!hasMore || isLoading || isFilter) return;

      setIsLoading(true);
      try {
        const resp: any = await listChatroomsService(page);

        if (page === 1) {
          setChatrooms(resp.data.data);
        } else {
          setChatrooms((prev) => [...prev, ...resp.data.data]);
        }

        setHasMore(resp.data.pagination.page < resp.data.pagination.totalPages);
        setPage((prev) => prev + 1);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    },
    [hasMore, isLoading, page]
  );

  const onFilterChatrooms = async (chatroomName: string) => {
    debugger
    const resp = await listChatroomsService(0, chatroomName);
    setChatrooms(resp.data.data);
    setIsFilter(false);
  };

  // cria o observer dentro do hook
  useEffect(() => {
    const sentinel = document.querySelector("#sentinel");
    if (!sentinel || isFilter) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        onListChatrooms();
      }
    });

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [hasMore, onListChatrooms]);

  return {
    openCreateChatModal,
    setOpenCreateChatModal,
    chatrooms,
    onCreateChatroom,
    onListChatrooms,
    hasMore,
    onFilterChatrooms,
    setIsFilter,
    isLoading,
  };
};

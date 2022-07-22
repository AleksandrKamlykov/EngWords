import React, { useCallback, useState } from "react";

export const useHttp = () => {

    const [loading, setLoading] = useState<boolean>(false);


    const request = useCallback(async ({
        url,
        method = 'GET',
        body = null,
        headers = {}
    }: any) => {
        setLoading(true);

        try {
            if (body) {
                body = JSON.stringify(body);
                headers["Content-Type"] =
                    headers["Content-Type"] !== "multipart/form-data" &&
                    "application/json";
            }

            const response = await fetch(url, { method, body, headers });
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Что-то пошло не так");
            }

            setLoading(false);

        } catch (e: any) {
            throw new Error(e);

        }

    }, []);

    return { request, loading };

};
export async function GetDetail({ id }) {
    fetch(`http://115.85.181.105:8080/api/v1/boards/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // JSON 형식의 응답을 파싱
        })
        .catch(error => {
            console.error('Fetch error:', error); // 오류 처리
            throw error; // 오류를 다시 throw하여 호출자에게 전파
        });
}

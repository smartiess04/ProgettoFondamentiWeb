const API_BASE = "/api/v1";

// Funzione base per fare le richieste
async function request(endpoint, options = {}) {
    // 1. IL SEGRETO DEI COOKIE: Diciamo al browser di inviare sempre i cookie sicuri
    options.credentials = "include";
    options.headers = { "Content-Type": "application/json", ...options.headers };

    let res = await fetch(`${API_BASE}${endpoint}`, options);

    // 2. LOGICA DI REFRESH AUTOMATICO
    // Se il server ci dice che l'Access Token è scaduto (401)
    if (res.status === 401 && endpoint !== "/auth/login" && endpoint !== "/auth/refresh") {
        try {
            // Proviamo a rinfrescare la sessione in background
            const refreshRes = await fetch(`${API_BASE}/auth/refresh`, { 
                method: "POST", 
                credentials: "include" 
            });
            
            if (!refreshRes.ok) throw new Error("Sessione scaduta");

            // Se il refresh ha successo (nuovo cookie impostato dal backend!), riproviamo la chiamata originale
            res = await fetch(`${API_BASE}${endpoint}`, options);
        } catch (err) {
            // Se il refresh fallisce, forziamo il logout visivo
            localStorage.removeItem("liber_user");
            window.location.href = "/"; // Rimanda alla pagina di avvio
            throw new Error("Sessione scaduta, effettua nuovamente l'accesso.");
        }
    }

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Errore del server");
    return data;
}

// ========= Rotte di Autenticazione =========
export async function login(email, password) {
    return request("/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
    });
}

export async function register(username, email, password) {
    return request("/auth/register", {
        method: "POST",
        body: JSON.stringify({ username, email, password }),
    });
}

export async function logout() {
    return request("/auth/logout", {
        method: "POST"
    });
}
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { ContainerSearch, InputSearchBar } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

type SearchBarProps = {
  id: number | void;
  search: boolean;
  assunto: string;
  setAssunto: React.Dispatch<React.SetStateAction<string>>;
  handleFunction?: any;
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  setRender?: React.Dispatch<React.SetStateAction<boolean>>;
  render?: boolean;
};

export const SearchBar = (props: SearchBarProps) => {
  const navigate = useNavigate();
  const {
    render,
    setRender,
    setAssunto,
    handleFunction,
    assunto,
    status,
    setStatus,
  } = props;

  return (
    <ContainerSearch>
      <InputSearchBar
        className="focus:outline-none focus:border-sky-500 focus:ring-1"
        placeholder="Digite o assunto do recado"
        onChange={(event: {
          target: { value: React.SetStateAction<string> };
        }) => setAssunto(event.target.value)}
        value={assunto}
        onKeyDown={(e: { key: string }) => {
          if (e.key === "Enter") {
            navigate(`/search=${assunto}/${status}/page=1`);
            setRender && setRender(!render);
            // window.location.href = `/search=${assunto}/${status}/page=1`;
          }
        }}
      />
      <div className="w-[250px] mr-3">
        <Select
          value={status}
          onChange={(e: any) => setStatus(e.target.value)}
          className="text-xs"
          fullWidth
        >
          <MenuItem value={"em-andamento"}>Em andamento</MenuItem>
          <MenuItem value={"cancelado"}>Cancelado</MenuItem>
          <MenuItem value={"concluido"}>Concluído</MenuItem>
          <MenuItem value={"todos"}>Todos</MenuItem>
        </Select>
      </div>
      <div className="rounded-xl border-solid border-[0.5px] border-gray-100">
        <Link to={`/search=${assunto}/${status}/page=1`}>
          <Button onClick={handleFunction}>
            <SearchIcon sx={{ fontSize: 42 }} />
          </Button>
        </Link>
      </div>
    </ContainerSearch>
  );
};
